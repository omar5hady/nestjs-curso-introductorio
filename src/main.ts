import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, //Con esto valida que no reciba campos extras y solo se limite a los configurados en el dto
  }));

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('This is a description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document);

  // app.enableCors({
  //   origin: 'http://localhost:4200',
  // })

  app.enableCors()

  await app.listen(3000);
}
bootstrap();
