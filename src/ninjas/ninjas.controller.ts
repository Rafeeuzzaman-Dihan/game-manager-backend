import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('ninjas')
export class NinjasController {
  // GET Method

  @Get()
  getNinjas() {
    return [];
  }

  // Get Method by ID

  @Get(':id')
  getNinja() {
    return {};
  }

  // Post Method
  @Post()
  createNinja() {
    return {};
  }

  // Put Method
  @Put(':id')
  updateNinja() {
    return {};
  }

  // Delete Method
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
