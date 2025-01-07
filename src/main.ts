import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Verify Influencers API')
    .setDescription('API para la verificación de influencers de salud')
    .setVersion('1.0')
    .addTag('influencers')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Aquí definimos el endpoint "/api" para ver Swagger
  console.log('Swagger on http://localhost:3000/api#/');
  

  await app.listen(3000);
}
bootstrap();


