import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from '../.env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(env.PORT);
  await app.listen(env.PORT);
}
bootstrap();
