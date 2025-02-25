import { NestFactory,  } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication} from '@nestjs/platform-express'

import { join } from 'path'
import * as env from 'dotenv'

async function bootstrap() {
  // load env
  env.config({ path: join(__dirname, "..", ".env")})

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ["debug", "error", "fatal", "log", "verbose", "warn"]
  });
  app.enableCors({
    origin: "*"
  })
  app.setGlobalPrefix("api")
  app.setBaseViewsDir(join(__dirname, "..", "views"))

  const PORT = process.env.PORT || 4900
  console.log("POST >>>>>>", PORT)
  console.log("process >>>>>>", process.env.ENV)
  await app.listen(PORT);
}
bootstrap();
