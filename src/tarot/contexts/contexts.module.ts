import { Module, OnModuleInit } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { ContextsService } from './contexts.service';
import { ContextsController } from './contexts.controller';
import { Context, ContextSchema } from './schemas/context.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Context.name, schema: ContextSchema }
    ]),
    CacheModule.register({
      ttl: 60 * 1000, // 1 minute
      max: 100,
    }),
  ],
  controllers: [ContextsController],
  providers: [ContextsService],
  exports: [ContextsService],
})
export class ContextsModule implements OnModuleInit {
  constructor(private readonly contextsService: ContextsService) {}

  async onModuleInit() {
    await this.contextsService.seedDefaultContexts();
  }
} 
