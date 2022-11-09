import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  ParseUUIDPipe,
  Query,
  HttpCode,
  HttpStatus,
  ConflictException,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindUsersDto } from '../dtos/find-user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    try {
      return await this.userService.create(body);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    try {
      // Prisma already throws error if no user found
      return await this.userService.findById(id);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Get()
  // @ApiQuery({ name: 'sortField', enum: Prisma.UserScalarFieldEnum })
  async find(@Query() query: FindUsersDto) {
    try {
      return await this.userService.find(query);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateUserDto,
  ) {
    try {
      const user = await this.userService.findById(id);

      if (!user) throw new NotFoundException(`User ID "${id}" not found`);

      return await this.userService.updateById(id, body);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const user = await this.userService.findById(id);

      if (!user) throw new NotFoundException('User not found');
      if (user?.deletedAt) throw new ConflictException('User already deleted');

      return await this.userService.softDeleteById(id);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
