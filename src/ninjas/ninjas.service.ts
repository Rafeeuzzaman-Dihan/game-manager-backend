import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Ninja One', type: 'Stealth' },
    { id: 2, name: 'Ninja Two', type: 'Combat' },
    { id: 3, name: 'Ninja Three', type: 'Assassin' },
  ];
  getNinjas(type?: 'Stealth' | 'Combat' | 'Assassin') {
    if (type) {
      return this.ninjas.filter((ninja) => ninja.type === type);
    }
    return this.ninjas;
  }
}