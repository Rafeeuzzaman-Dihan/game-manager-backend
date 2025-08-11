import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GamesModule } from './games/games.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [GamesModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
