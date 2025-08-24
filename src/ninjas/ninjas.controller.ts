import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

  constructor(private readonly ninjasService: NinjasService) {}

  // GET /ninjas --> Collection of Ninjas
  // @Get()
  // getNinjas() {
  //   return [];
  // }


  // GET /ninjas/?type=fast --> Fast Ninja

  @Get()
  getNinjas(@Query ('type') type: 'speed' | 'stealth' | 'strength') {
    return this.ninjasService.getNinjas(type);
  }

  // GET /ninjas/:id  --> Single Ninja

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return this.ninjasService.getNinja(+id);
  }

  // POST /ninjas --> Create a new Ninja

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  // PUT /ninjas/:id  --> Update a Ninja

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  // DELETE /ninjas/:id  --> Delete a Ninja

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(+id);
  }

  }

