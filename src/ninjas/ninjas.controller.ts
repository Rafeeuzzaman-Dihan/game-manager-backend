import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {

  // GET /ninjas  --> Collection of Ninjas
  // @Get()
  // getNinjas() {
  //   return [];
  // }


  // GET /ninjas/?type=fast --> Fast Ninja

  @Get()
  getNinjas(@Query ('type') type: string){
      return [{ type }];
  }

  // GET /ninjas/:id  --> Single Ninja

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id
    };
  }

  // POST /ninjas  --> Create a new Ninja

  @Post()
  createNinja() {
    return {};
  }

  // PUT /ninjas/:id  --> Update a Ninja

  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {};
  }

  // DELETE /ninjas/:id  --> Delete a Ninja

  @Delete(':id')
  removeNinja() {
    return {};
  }


}
