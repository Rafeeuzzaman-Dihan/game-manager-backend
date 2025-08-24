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

  getNinja(id: number){
    const ninja = this.ninjas.find((ninja) => ninja.id  === id);

    if(!ninja){
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: createNinjaDto) {
    const newNinja = {
      ...createNinjaDto,
      id: Date.now(),
    };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: updateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    })
    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const toBeRemoved = this.getNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return toBeRemoved;
  }

}
