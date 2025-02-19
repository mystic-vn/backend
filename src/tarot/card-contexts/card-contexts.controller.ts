import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CardContextsService } from './card-contexts.service';
import { CreateCardContextDto } from './dto/create-card-context.dto';
import { UpdateCardContextDto } from './dto/update-card-context.dto';
import { QueryCardContextDto } from './dto/query-card-context.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../users/enums/role.enum';

@ApiTags('Card Contexts')
@Controller('tarot/card-contexts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CardContextsController {
  constructor(private readonly cardContextsService: CardContextsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new card context' })
  create(@Body() createCardContextDto: CreateCardContextDto) {
    return this.cardContextsService.create(createCardContextDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all card contexts with pagination and filtering' })
  findAll(@Query() query: QueryCardContextDto) {
    return this.cardContextsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a card context by id' })
  findOne(@Param('id') id: string) {
    return this.cardContextsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a card context' })
  update(@Param('id') id: string, @Body() updateCardContextDto: UpdateCardContextDto) {
    return this.cardContextsService.update(id, updateCardContextDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete a card context' })
  remove(@Param('id') id: string) {
    return this.cardContextsService.remove(id);
  }
} 