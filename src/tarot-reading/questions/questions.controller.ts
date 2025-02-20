import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './schemas/question.schema';

@Controller('tarot-reading/questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  async create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  async findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }

  @Get('context/:context')
  async findByContext(@Param('context') context: string): Promise<Question[]> {
    return this.questionsService.findByContext(context);
  }

  @Get('spread-type/:spreadType')
  async findBySpreadType(@Param('spreadType') spreadType: string): Promise<Question[]> {
    return this.questionsService.findBySpreadType(spreadType);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Question> {
    return this.questionsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateQuestionDto: Partial<CreateQuestionDto>,
  ): Promise<Question> {
    return this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Question> {
    return this.questionsService.remove(id);
  }
}
