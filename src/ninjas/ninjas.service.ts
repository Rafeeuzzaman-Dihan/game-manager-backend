import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Ninja One', type: 'stealth' },
    { id: 2, name: 'Ninja Two', type: 'speed' },
    { id: 3, name: 'Ninja Three', type: 'strength' },
  ];

  getNinjas(type?: 'stealth' | 'speed' | 'strength') {
    if (type) {
      return this.ninjas.filter((ninja) => ninja.type === type);
    }

    return this.ninjas;

  }
}
