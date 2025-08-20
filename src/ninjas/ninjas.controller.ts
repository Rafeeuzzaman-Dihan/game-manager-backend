import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

  // GET /ninjas  --> Collection of Ninjas
  @Get()
  getNinjas() {
    return [];
  }

  // GET /ninjas/:id  --> Single Ninja

  @Get(':id')
  getOneNinja() {
    return {};
  }

  // POST /ninjas  --> Create a new Ninja

  @Post()
  createNinja() {
    return {};
  }

  // PUT /ninjas/:id  --> Update a Ninja

  @Put(':id')
  updateNinja() {
    return {};
  }

  // DELETE /ninjas/:id  --> Delete a Ninja

  @Delete(':id')
  removeNinja() {
    return {};
  }


}
