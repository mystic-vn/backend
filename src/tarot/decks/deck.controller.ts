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
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DeckService } from './deck.service';
import { CreateDeckDto, UpdateDeckDto } from './deck.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@ApiTags('Tarot Decks')
@Controller('tarot/decks')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new tarot deck' })
  @ApiResponse({ status: 201, description: 'The tarot deck has been successfully created.' })
  create(@Body() createDeckDto: CreateDeckDto) {
    return this.deckService.create(createDeckDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tarot decks with pagination' })
  @ApiResponse({ status: 200, description: 'Return the list of tarot decks.' })
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder?: 'asc' | 'desc',
  ) {
    return this.deckService.findAll({
      page: +page,
      limit: +limit,
      search,
      sortBy,
      sortOrder,
    });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tarot deck by id' })
  @ApiResponse({ status: 200, description: 'Return the tarot deck.' })
  findOne(@Param('id') id: string) {
    return this.deckService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a tarot deck' })
  @ApiResponse({ status: 200, description: 'The tarot deck has been successfully updated.' })
  update(@Param('id') id: string, @Body() updateDeckDto: UpdateDeckDto) {
    return this.deckService.update(id, updateDeckDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a tarot deck' })
  @ApiResponse({ status: 200, description: 'The tarot deck has been successfully deleted.' })
  remove(@Param('id') id: string) {
    return this.deckService.remove(id);
  }
} 