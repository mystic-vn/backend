import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ContextsService } from './contexts.service';
import { CreateContextDto } from './dto/create-context.dto';
import { UpdateContextDto } from './dto/update-context.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../users/enums/role.enum';
import { Context } from './schemas/context.schema';
import { Public } from '../../auth/decorators/public.decorator';

@ApiTags('Tarot Contexts')
@Controller('tarot/contexts')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ContextsController {
  constructor(private readonly contextsService: ContextsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new context' })
  @ApiResponse({ status: 201, type: Context })
  create(@Body() createContextDto: CreateContextDto) {
    return this.contextsService.create(createContextDto);
  }

  @Get()
  @Public()
  @ApiOperation({ summary: 'Get all contexts' })
  @ApiResponse({ status: 200, type: [Context] })
  findAll() {
    return this.contextsService.findAll();
  }

  @Get('slug/:slug')
  @Public()
  @ApiOperation({ summary: 'Get a context by slug' })
  @ApiResponse({ status: 200, type: Context })
  findBySlug(@Param('slug') slug: string) {
    return this.contextsService.findBySlug(slug);
  }

  @Get(':id')
  @Public()
  @ApiOperation({ summary: 'Get a context by id' })
  @ApiResponse({ status: 200, type: Context })
  findOne(@Param('id') id: string) {
    return this.contextsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a context' })
  @ApiResponse({ status: 200, type: Context })
  update(@Param('id') id: string, @Body() updateContextDto: UpdateContextDto) {
    return this.contextsService.update(id, updateContextDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete a context' })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.contextsService.remove(id);
  }
} 