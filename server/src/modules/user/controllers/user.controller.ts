import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseUUIDPipe,
  Query,
  HttpCode,
  HttpStatus,
  ConflictException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
import { FindUsersDto } from '../dtos/find-user.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('User')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() body: CreateUserDto) {
    const { email } = body;
    const user = await this.userService.findByEmail(email);

    if (user) throw new ConflictException(`Email "${email}" already signed up`);

    try {
      return await this.userService.create(body);
    } catch (Error) {
      throw Error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async find(@Query() query: FindUsersDto) {
    try {
      return await this.userService.find(query);
    } catch (Error) {
      throw Error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    try {
      const user = await this.userService.findById(id);

      if (!user) throw new NotFoundException(`User ID "${id}" not found`);
      delete user.password;

      return user;
    } catch (Error) {
      throw Error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: UpdateUserDto,
  ) {
    try {
      const user = await this.userService.findById(id);

      if (!user) throw new NotFoundException(`User ID "${id}" not found`);

      return await this.userService.update(id, body);
    } catch (Error) {
      throw Error;
    }
  }

  @UseGuards(AuthGuard('jwt'))
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    try {
      const user = await this.userService.findById(id);

      if (!user) throw new NotFoundException('User not found');

      return await this.userService.softDelete(id);
    } catch (Error) {
      throw Error;
    }
  }
}
