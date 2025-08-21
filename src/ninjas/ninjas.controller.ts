import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

  // GET /ninjas --> Collection of Ninjas
  // @Get()
  // getNinjas() {
  //   return [];
  // }


  // GET /ninjas/?type=fast --> Fast Ninja

  @Get()
  getNinjas(@Query ('type') type: 'speed' | 'stealth' | 'strength') {
    const service = new NinjasService()
    return service.getNinjas(type);
  }

  // GET /ninjas/:id  --> Single Ninja

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id
    };
  }

  // POST /ninjas --> Create a new Ninja

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // PUT /ninjas/:id  --> Update a Ninja

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto,
    };
};
  }

  // DELETE /ninjas/:id  --> Delete a Ninja

  // @Delete(':id')
  // removeNinja(@param('id') id: string) {
  //   return {
  //     id,
  //   };
  // }

