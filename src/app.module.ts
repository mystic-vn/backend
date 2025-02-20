import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
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
