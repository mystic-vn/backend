import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { ArcanaTypesService } from './arcana-types.service';
import { CreateArcanaTypeDto } from './dto/create-arcana-type.dto';
import { UpdateArcanaTypeDto } from './dto/update-arcana-type.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';

@ApiTags('Tarot Arcana Types')
@Controller('tarot/arcana-types')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ArcanaTypesController {
  constructor(private readonly arcanaTypesService: ArcanaTypesService) {}

  @Post()
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new arcana type (Disabled)' })
  @ApiResponse({ status: 400, description: 'Creating new arcana types is not allowed.' })
  create(@Body() createArcanaTypeDto: CreateArcanaTypeDto) {
    throw new BadRequestException('Creating new arcana types is not allowed. Only Major and Minor Arcana are supported.');
  }

  @Get()
  @ApiOperation({ summary: 'Get all arcana types with pagination and filtering' })
  @ApiResponse({ status: 200, description: 'Return the list of arcana types.' })
  findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'ASC' | 'DESC',
  ) {
    return this.arcanaTypesService.findAll({
      page: page ? +page : undefined,
      limit: limit ? +limit : undefined,
      search,
      sortBy,
      sortOrder,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get an arcana type by id' })
  @ApiResponse({ status: 200, description: 'Return the arcana type.' })
  findOne(@Param('id') id: string) {
    return this.arcanaTypesService.findOne(id);
  }

  @Patch(':id')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an arcana type' })
  @ApiResponse({ status: 200, description: 'The arcana type has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateArcanaTypeDto: UpdateArcanaTypeDto) {
    return this.arcanaTypesService.update(id, updateArcanaTypeDto);
  }

  @Delete(':id')
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an arcana type' })
  @ApiResponse({ status: 200, description: 'The arcana type has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.arcanaTypesService.remove(id);
  }
} 