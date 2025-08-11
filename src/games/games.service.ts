import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  private games = [
    { id: 1, title: 'chess' },
    { id: 2, title: 'cricket' },
  ];

  getAllGames() {
    return this.games;
  }

  addGame(title: string) {
    const newGame = {
      id: this.games.length + 1,
      title,
    };
    this.games.push(newGame);
    return newGame;
  }
}
