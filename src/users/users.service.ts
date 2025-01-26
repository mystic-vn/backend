import { Injectable, ConflictException, NotFoundException, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PaginationDto } from './dto/pagination.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto, roles: string[] = ['user']): Promise<User> {
    const existingUser = await this.findByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      roles,
    });

    return createdUser.save();
  }

  async findAll(paginationDto: PaginationDto = { page: 1, limit: 10 }): Promise<{ users: User[], total: number }> {
    const page = paginationDto.page || 1;
    const limit = paginationDto.limit || 10;
    const skip = (page - 1) * limit;

    // Query điều kiện: isDeleted không tồn tại hoặc isDeleted = false
    const query = {
      $or: [
        { isDeleted: { $exists: false } },
        { isDeleted: false }
      ]
    };

    const [users, total] = await Promise.all([
      this.userModel
        .find(query)
        .select('-password')
        .skip(skip)
        .limit(limit)
        .exec(),
      this.userModel.countDocuments(query)
    ]);

    return {
      users,
      total
    };
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findById(id: string): Promise<User> {
    const user = await this.userModel.findById(id).select('-password').exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    if (updateUserDto.email) {
      const existingUser = await this.findByEmail(updateUserDto.email);
      if (existingUser && existingUser._id.toString() !== id) {
        throw new ConflictException('Email already exists');
      }
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .select('-password')
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }

    return updatedUser;
  }

  async updateRoles(id: string, roles: string[], currentUserId: string): Promise<User> {
    // Kiểm tra user cần update có tồn tại không
    const userToUpdate = await this.userModel.findById(id);
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    // Không cho phép user tự thay đổi roles của chính mình
    if (id === currentUserId) {
      throw new ForbiddenException('Cannot update your own roles');
    }

    // Kiểm tra roles hợp lệ
    const validRoles = ['admin', 'user', 'moderator'];
    const invalidRoles = roles.filter(role => !validRoles.includes(role));
    if (invalidRoles.length > 0) {
      throw new ForbiddenException(`Invalid roles: ${invalidRoles.join(', ')}`);
    }

    // Không cho phép thay đổi roles của admin
    if (userToUpdate.roles.includes('admin')) {
      throw new ForbiddenException('Cannot update roles of an admin');
    }

    // Đảm bảo luôn có role 'user'
    if (!roles.includes('user')) {
      roles.push('user');
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, { roles }, { new: true })
      .select('-password')
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found after update');
    }

    return updatedUser;
  }

  async updateStatus(id: string, isActive: boolean, currentUserId: string): Promise<User> {
    // Kiểm tra user cần update có tồn tại không
    const userToUpdate = await this.userModel.findById(id);
    if (!userToUpdate) {
      throw new NotFoundException('User not found');
    }

    // Không cho phép user tự thay đổi trạng thái của chính mình
    if (id === currentUserId) {
      throw new ForbiddenException('Cannot update your own status');
    }

    // Không cho phép thay đổi trạng thái của admin
    if (userToUpdate.roles.includes('admin')) {
      throw new ForbiddenException('Cannot update status of an admin');
    }

    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, { isActive }, { new: true })
      .select('-password')
      .exec();

    if (!updatedUser) {
      throw new NotFoundException('User not found after update');
    }

    return updatedUser;
  }

  async changePassword(id: string, changePasswordDto: ChangePasswordDto): Promise<void> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(
      changePasswordDto.currentPassword,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Current password is incorrect');
    }

    const hashedNewPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);
    await this.userModel.findByIdAndUpdate(id, {
      password: hashedNewPassword,
    });
  }

  async softDelete(id: string, currentUserId: string): Promise<void> {
    // Kiểm tra user cần xóa có tồn tại không
    const userToDelete = await this.userModel.findById(id);
    if (!userToDelete) {
      throw new NotFoundException('User not found');
    }

    // Không cho phép user tự xóa chính mình
    if (id === currentUserId) {
      throw new ForbiddenException('Cannot delete your own account');
    }

    // Không cho phép xóa tài khoản admin
    if (userToDelete.roles.includes('admin')) {
      throw new ForbiddenException('Cannot delete an admin account');
    }

    // Thực hiện soft delete
    await this.userModel.findByIdAndUpdate(id, {
      isActive: false,
      isDeleted: true,
      deletedAt: new Date(),
    });
  }

  async countActiveUsers(): Promise<number> {
    return this.userModel.countDocuments({
      isActive: true,
      $or: [
        { isDeleted: { $exists: false } },
        { isDeleted: false }
      ]
    });
  }
} 