import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ReadingAnalysisService } from './reading-analysis.service';
import { CreateReadingAnalysisDto } from './dto/create-reading-analysis.dto';

@Controller('tarot-reading/analysis')
export class ReadingAnalysisController {
  constructor(
    private readonly readingAnalysisService: ReadingAnalysisService
  ) {}

  @Post()
  async analyze(@Body() createDto: CreateReadingAnalysisDto) {
    return this.readingAnalysisService.analyze(createDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.readingAnalysisService.findOne(id);
  }

  @Get('context/:context')
  async findByContext(@Param('context') context: string) {
    return this.readingAnalysisService.findByContext(context);
  }
} 