import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExamenController } from './examen/examen.controller';
import { ExamenService } from './examen/examen.service';

@Module({
  imports: [],
  controllers: [AppController, ExamenController],
  providers: [AppService, ExamenService],
})
export class AppModule {}
