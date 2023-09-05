import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OperacionesModule } from './operaciones/operaciones.module';

@Module({
  imports: [OperacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
