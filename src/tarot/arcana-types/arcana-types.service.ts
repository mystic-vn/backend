import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ArcanaType, ArcanaTypeDocument } from './schemas/arcana-type.schema';
import { CreateArcanaTypeDto } from './dto/create-arcana-type.dto';
import { UpdateArcanaTypeDto } from './dto/update-arcana-type.dto';

@Injectable()
export class ArcanaTypesService {
  constructor(
    @InjectModel(ArcanaType.name) private arcanaTypeModel: Model<ArcanaTypeDocument>
  ) {}

  // Method này sẽ không được sử dụng nữa do đã vô hiệu hóa trong controller
  async create(createArcanaTypeDto: CreateArcanaTypeDto): Promise<ArcanaType> {
    throw new BadRequestException('Creating new arcana types is not allowed');
  }

  async findAll(query: {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    sortOrder?: 'ASC' | 'DESC';
  }) {
    const {
      page = 1,
      limit = 10,
      search = '',
      sortBy = 'name',
      sortOrder = 'ASC'
    } = query;

    const skip = (page - 1) * limit;
    const filter: any = {
      isDeleted: { $ne: true }
    };

    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { keywords: { $regex: search, $options: 'i' } }
      ];
    }

    const [items, total] = await Promise.all([
      this.arcanaTypeModel
        .find(filter)
        .sort({ [sortBy]: sortOrder === 'ASC' ? 1 : -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.arcanaTypeModel.countDocuments(filter)
    ]);

    const totalPages = Math.ceil(total / limit);

    return {
      items,
      meta: {
        total,
        page,
        limit,
        totalPages,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1
      }
    };
  }

  async findOne(id: string): Promise<ArcanaType> {
    const arcanaType = await this.arcanaTypeModel.findOne({ 
      _id: id,
      isDeleted: { $ne: true }
    }).exec();
    
    if (!arcanaType) {
      throw new NotFoundException(`Arcana type with ID "${id}" not found`);
    }
    return arcanaType;
  }

  async update(id: string, updateArcanaTypeDto: UpdateArcanaTypeDto): Promise<ArcanaType> {
    // Chỉ cho phép cập nhật một số trường nhất định
    const allowedUpdates = {
      description: updateArcanaTypeDto.description,
      significance: updateArcanaTypeDto.significance,
      keywords: updateArcanaTypeDto.keywords,
      readingFocus: updateArcanaTypeDto.readingFocus
    };

    // Loại bỏ các trường undefined
    Object.keys(allowedUpdates).forEach(key => 
      allowedUpdates[key] === undefined && delete allowedUpdates[key]
    );

    const updatedArcanaType = await this.arcanaTypeModel
      .findOneAndUpdate(
        { _id: id, isDeleted: { $ne: true } },
        allowedUpdates,
        { new: true }
      )
      .exec();
    
    if (!updatedArcanaType) {
      throw new NotFoundException(`Arcana type with ID "${id}" not found`);
    }
    return updatedArcanaType;
  }

  // Vô hiệu hóa xóa arcana type
  async remove(id: string): Promise<void> {
    throw new BadRequestException('Deleting arcana types is not allowed');
  }
} 