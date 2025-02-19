import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ContextsSeeder } from './migrations/seed-contexts';
import { SeedCardContexts } from './migrations/seed-card-contexts';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  // Run seeders
  const contextsSeeder = app.get(ContextsSeeder);
  await contextsSeeder.seed();
  
  // Seed card contexts
  const seedCardContexts = app.get(SeedCardContexts);
  await seedCardContexts.run();
  
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
