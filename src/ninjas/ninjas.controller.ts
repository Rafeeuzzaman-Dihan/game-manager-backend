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

@Controller('ninjas')
export class NinjasController {
  // GET Method

  // @Get()
  // getNinjas() {
  //   return [];
  // }

  @Get()
  getNinjas(@Query('type') type: string) {
    return [{ type }];
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
