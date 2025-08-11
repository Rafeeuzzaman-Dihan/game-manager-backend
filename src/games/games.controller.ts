import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getAllGames() {
    return this.gamesService.getAllGames();
  }
  @Post()
  addGame(@Body() createGameDto: CreateGameDto) {
    return this.gamesService.addGame(createGameDto.title);
  }
}
