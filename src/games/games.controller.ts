import { Body, Controller, Get, Post } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAllGames();
  }
  @Post()
  addGame(@Body('title') title: string){
    return this.gamesService.addGame(title);
  }
}
