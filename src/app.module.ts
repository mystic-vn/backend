import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { UploadsModule } from './uploads/uploads.module';
import { TarotModule } from './tarot/tarot.module';
import { DatabaseModule } from './database/database.module';
import { MigrationsModule } from './migrations/migrations.module';
import { TarotReadingModule } from './tarot-reading/tarot-reading.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get('REDIS_HOST', 'localhost'),
        port: configService.get('REDIS_PORT', 6379),
        password: configService.get('REDIS_PASSWORD'),
        ttl: 30 * 24 * 60 * 60, // 30 ngày
      }),
      inject: [ConfigService],
    }),
    DatabaseModule,
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => [{
        rootPath: configService.get<string>('UPLOAD_PATH') || '/var/www/uploads',
        serveRoot: '/uploads',
      }],
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    UploadsModule,
    TarotModule,
    MigrationsModule,
    TarotReadingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
