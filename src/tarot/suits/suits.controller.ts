import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpStatus, BadRequestException } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuitsService } from './suits.service';
import { CreateSuitDto } from './dto/create-suit.dto';
import { UpdateSuitDto } from './dto/update-suit.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../users/enums/role.enum';
import { Suit } from './schemas/suit.schema';

@ApiTags('Tarot Suits')
@Controller('tarot/suits')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SuitsController {
  constructor(private readonly suitsService: SuitsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new suit (Disabled)' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Creating new suits is not allowed' })
  create(@Body() createSuitDto: CreateSuitDto) {
    throw new BadRequestException('Không thể tạo mới suit. Chỉ có 4 loại suit cố định: Cups, Wands, Pentacles, và Swords.');
  }

  @Get()
  @ApiOperation({ summary: 'Get all suits' })
  @ApiResponse({ status: HttpStatus.OK, type: Suit })
  findAll() {
    return this.suitsService.findAll();
  }

  @Get('name/:name')
  @ApiOperation({ summary: 'Get a suit by name' })
  @ApiResponse({ status: HttpStatus.OK, type: Suit })
  findByName(@Param('name') name: string) {
    return this.suitsService.findByName(name);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a suit by id' })
  @ApiResponse({ status: HttpStatus.OK, type: Suit })
  findOne(@Param('id') id: string) {
    return this.suitsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a suit' })
  @ApiResponse({ status: HttpStatus.OK, type: Suit })
  update(@Param('id') id: string, @Body() updateSuitDto: UpdateSuitDto) {
    return this.suitsService.update(id, updateSuitDto);
  }

  @Patch('name/:name')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a suit by name' })
  @ApiResponse({ status: HttpStatus.OK, type: Suit })
  updateByName(@Param('name') name: string, @Body() updateSuitDto: UpdateSuitDto) {
    return this.suitsService.updateByName(name, updateSuitDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Delete a suit (Disabled)' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Deleting suits is not allowed' })
  remove(@Param('id') id: string) {
    throw new BadRequestException('Không thể xóa suit. Các suit là cố định và không thể thay đổi.');
  }
} 