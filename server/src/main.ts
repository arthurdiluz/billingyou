import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const port = process.env?.HTTP_PORT || 3333;

  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // set type to data after DTO
      forbidNonWhitelisted: true, // throw exception if param not in DTO
    }),
  );

  // setup swagger (only in production)
  const config = new DocumentBuilder()
    .setTitle('BillingYou API')
    .setDescription('BillingYou API implementation')
    .setVersion('0.1')
    //.addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const customOptions: SwaggerCustomOptions = {
    customSiteTitle: 'BillingYou API',
    swaggerOptions: {
      docExpansion: 'none',
      operationsSorter: 'alpha',
      persistAuthorization: true,
      tagsSorter: 'alpha',
    },
  };
  SwaggerModule.setup('api/doc', app, document, customOptions);

  await app.listen(port);

  console.log(`Application is running on ${await app.getUrl()}`);
  console.log(`API docs on ${await app.getUrl()}/api/doc`);
}

bootstrap();
