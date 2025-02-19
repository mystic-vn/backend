import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArcanaTypesService } from './arcana-types.service';
import { ArcanaTypesController } from './arcana-types.controller';
import { ArcanaType, ArcanaTypeSchema } from './schemas/arcana-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ArcanaType.name, schema: ArcanaTypeSchema }
    ])
  ],
  controllers: [ArcanaTypesController],
  providers: [ArcanaTypesService],
  exports: [ArcanaTypesService, MongooseModule]
})
export class ArcanaTypesModule {} 