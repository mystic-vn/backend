import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Query, 
  UseGuards,
  ParseUUIDPipe,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { QueryCardDto } from './dto/query-card.dto';
import { FilterCardDto } from './dto/filter-card.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from '../../users/enums/role.enum';
import { Card } from './schemas/card.schema';
import { PaginatedCards } from './interfaces/paginated-cards.interface';

// Tạo class để sử dụng cho Swagger
class PaginatedCardsResponse implements PaginatedCards {
  items: Card[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

@ApiTags('Tarot Cards')
@Controller('tarot/cards')
@UseGuards(JwtAuthGuard, RolesGuard)
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Create a new tarot card' })
  @ApiResponse({ status: HttpStatus.CREATED, type: Card })
  create(@Body() createCardDto: CreateCardDto): Promise<Card> {
    return this.cardsService.create(createCardDto);
  }

  @Get('filter')
  @ApiOperation({ summary: 'Filter cards by arcana type and suit' })
  @ApiResponse({ status: HttpStatus.OK, type: [Card] })
  @ApiQuery({ name: 'arcanaTypeId', required: true })
  @ApiQuery({ name: 'suitId', required: false })
  filterCards(@Query() filterDto: FilterCardDto): Promise<Card[]> {
    return this.cardsService.filterCards(filterDto);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all tarot cards without pagination' })
  @ApiResponse({ status: HttpStatus.OK, type: [Card] })
  findAllWithoutPagination(): Promise<Card[]> {
    return this.cardsService.findAllWithoutPagination();
  }

  @Get()
  @ApiOperation({ summary: 'Get all tarot cards with pagination and filtering' })
  @ApiResponse({ status: HttpStatus.OK, type: PaginatedCardsResponse })
  @ApiQuery({ name: 'search', required: false })
  @ApiQuery({ name: 'page', type: Number, required: false })
  @ApiQuery({ name: 'limit', type: Number, required: false })
  findAll(@Query() query: QueryCardDto): Promise<PaginatedCards> {
    return this.cardsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tarot card by id' })
  @ApiResponse({ status: HttpStatus.OK, type: Card })
  findOne(@Param('id') id: string): Promise<Card> {
    return this.cardsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.ADMIN)
  @ApiOperation({ summary: 'Update a tarot card' })
  @ApiResponse({ status: HttpStatus.OK, type: Card })
  update(
    @Param('id') id: string, 
    @Body() updateCardDto: UpdateCardDto
  ): Promise<Card> {
    return this.cardsService.update(id, updateCardDto);
  }

  @Delete(':id')
  @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a tarot card' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  remove(@Param('id') id: string): Promise<void> {
    return this.cardsService.remove(id);
  }
} 
