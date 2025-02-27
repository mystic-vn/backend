import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DatabaseSeeder } from './migrations/database.seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: [process.env.FRONTEND_URL || 'http://localhost:3000', process.env.REACT_NATIVE ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Run database seeding
  const databaseSeeder = app.get(DatabaseSeeder);
  await databaseSeeder.seed();
  
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
