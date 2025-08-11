import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  // GET Method

  // @Get()
  // getNinjas() {
  //   return [];
  // }

  @Get()
  getNinjas(@Query('type') type: 'Stealth' | 'Combat' | 'Assassin') {
    // const service = new NinjasService();
    return this.ninjasService.getNinjas(type);
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
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      name: createNinjaDto.name,
    };
  }

  // Put Method
  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      name: updateNinjaDto,
    };
  }

  // Delete Method
  @Delete(':id')
  deleteNinja() {
    return {};
  }
}
