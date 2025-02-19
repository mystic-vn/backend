import { Controller, Get, Post, Body, Param, UseInterceptors, UploadedFiles, Put, Delete } from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { DecksService } from './decks.service';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';

interface FileUrls {
  coverImageUrl?: string;
  backImageUrl?: string;
}

@Controller('tarot/decks')
export class DecksController {
  constructor(private readonly decksService: DecksService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'coverImage', maxCount: 1 },
      { name: 'backImage', maxCount: 1 }
    ])
  )
  async create(
    @Body() createDeckDto: CreateDeckDto,
    @Body() fileUrls: FileUrls,
    @UploadedFiles() files: {
      coverImage?: Express.Multer.File[],
      backImage?: Express.Multer.File[]
    }
  ) {
    return this.decksService.create(createDeckDto, files, fileUrls);
  }

  @Get()
  findAll() {
    return this.decksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.decksService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(
    FileFieldsInterceptor([
      { name: 'coverImage', maxCount: 1 },
      { name: 'backImage', maxCount: 1 }
    ])
  )
  update(
    @Param('id') id: string,
    @Body() updateDeckDto: UpdateDeckDto,
    @UploadedFiles() files: {
      coverImage?: Express.Multer.File[],
      backImage?: Express.Multer.File[]
    }
  ) {
    return this.decksService.update(id, updateDeckDto, files);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.decksService.softDelete(id);
  }
} 