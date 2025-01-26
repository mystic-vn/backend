import { Controller, Get, Put, Delete, Body, UseGuards, Request, HttpCode, HttpStatus, Param, Query, ForbiddenException } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { PaginationDto } from './dto/pagination.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    return this.usersService.findAll(paginationDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Request() req) {
    return this.usersService.findById(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me')
  async updateProfile(@Request() req, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(req.user.id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('me/change-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  async changePassword(@Request() req, @Body() changePasswordDto: ChangePasswordDto) {
    await this.usersService.changePassword(req.user.id, changePasswordDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Request() req,
  ) {
    // Không cho phép cập nhật thông tin của admin nếu không phải là admin
    if (!req.user.roles.includes('admin')) {
      const userToUpdate = await this.usersService.findById(id);
      if (userToUpdate.roles.includes('admin')) {
        throw new ForbiddenException('Cannot update admin information');
      }
    }
    return this.usersService.update(id, updateUserDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Put(':id/roles')
  async updateRoles(
    @Param('id') id: string,
    @Body('roles') roles: string[],
    @Request() req,
  ) {
    return this.usersService.updateRoles(id, roles, req.user.id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Put(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body('isActive') isActive: boolean,
    @Request() req,
  ) {
    return this.usersService.updateStatus(id, isActive, req.user.id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteUser(
    @Param('id') id: string,
    @Request() req,
  ) {
    await this.usersService.softDelete(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'moderator')
  @Get('stats/dashboard')
  async getDashboardStats() {
    const totalUsers = await this.usersService.countActiveUsers();
    return {
      stats: [
        {
          name: 'Total Users',
          value: totalUsers.toString(),
          change: '0%', // Có thể tính % thay đổi so với tháng trước
          changeType: 'neutral'
        }
        // Có thể thêm các thống kê khác ở đây
      ]
    };
  }
} 