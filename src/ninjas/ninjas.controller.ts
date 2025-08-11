import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET Method

  @Get()
  getNinjas() {
    return [];
  }

  // Get Method by ID

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // Post Method
  @Post()
  createNinja() {
    return {};
  }

  // Put Method
  @Put(':id')
  updateNinja(@Param('id') id: string) {
    return {
      id,
    };
  }

  // Delete Method
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
