import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { SpreadTypesService } from './spread-types.service';
import { CreateSpreadTypeDto } from './dto/create-spread-type.dto';
import { SpreadType } from './schemas/spread-type.schema';

@Controller('tarot-reading/spread-types')
export class SpreadTypesController {
  constructor(private readonly spreadTypesService: SpreadTypesService) {}

  @Post()
  async create(@Body() createSpreadTypeDto: CreateSpreadTypeDto): Promise<SpreadType> {
    return this.spreadTypesService.create(createSpreadTypeDto);
  }

  @Get()
  async findAll(@Query('context') context?: string): Promise<SpreadType[]> {
    if (context) {
      return this.spreadTypesService.findByContext(context);
    }
    return this.spreadTypesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SpreadType> {
    return this.spreadTypesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSpreadTypeDto: Partial<CreateSpreadTypeDto>,
  ): Promise<SpreadType> {
    return this.spreadTypesService.update(id, updateSpreadTypeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<SpreadType> {
    return this.spreadTypesService.remove(id);
  }
} 