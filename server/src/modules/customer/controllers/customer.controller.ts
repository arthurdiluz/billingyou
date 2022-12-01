import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { FindCustomerDto } from '../dtos/find-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CustomerService } from '../services/customer.service';

@ApiTags('Customer')
@Controller('api/customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly userService: UserService,
  ) {}

  @Post()
  async create(@Body() body: CreateCustomerDto) {
    const { userId } = body;
    const user = await this.userService.findById(userId);

    if (!user) throw new NotFoundException(`User ID "${userId}" not found`);
    if (user?.deletedAt) throw new ConflictException('User already deleted');

    try {
      return await this.customerService.create(body);
    } catch (Error) {
      throw Error;
    }
  }

  @Get()
  async find(@Query() query: FindCustomerDto) {
    try {
      return await this.customerService.find(query);
    } catch (Error) {
      throw Error;
    }
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    try {
      const customer = await this.customerService.findById(id);

      if (!customer) {
        throw new NotFoundException(`Customer ID "${id}" not found`);
      }

      return customer;
    } catch (Error) {
      throw Error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: UpdateCustomerDto,
  ) {
    try {
      const customer = await this.customerService.findById(id);

      if (!customer) {
        throw new NotFoundException(`Customer ID "${id}" not found`);
      }

      return await this.customerService.update(id, body);
    } catch (Error) {
      throw Error;
    }
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async deleteById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    try {
      const customer = await this.customerService.findById(id);

      if (!customer) {
        throw new NotFoundException('Customer not found');
      }

      if (customer?.deletedAt) {
        throw new ConflictException('Customer already deleted');
      }

      return await this.customerService.softDelete(id);
    } catch (Error) {
      throw Error;
    }
  }
}
