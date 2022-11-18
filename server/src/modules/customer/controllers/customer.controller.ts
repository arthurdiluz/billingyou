import {
  BadRequestException,
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { FindCustomerDto } from '../dtos/find-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CustomerService } from '../services/customer.service';

@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(@Body() body: CreateCustomerDto) {
    try {
      return await this.customerService.create(body);
    } catch (error) {
      throw new BadRequestException(error?.mesage);
    }
  }

  @Get()
  //@ApiQuery({ name: 'sortField', enum: Prisma.CustomerScalarFieldEnum })
  async find(@Query() query: FindCustomerDto) {
    try {
      return await this.customerService.find(query);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe()) id: string) {
    try {
      // Prisma already throws error if no user found
      return this.customerService.findById(id);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() body: UpdateCustomerDto,
  ) {
    try {
      const customer = await this.customerService.findById(id);

      if (!customer) {
        throw new NotFoundException(`Customer ID "${id}" not found`);
      }

      return await this.customerService.updateById(id, body);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Delete(':id')
  async deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    try {
      const customer = await this.customerService.findById(id);

      if (!customer) {
        throw new NotFoundException('Customer not found');
      }

      if (customer?.deletedAt) {
        throw new ConflictException('Customer already deleted');
      }

      return await this.customerService.softDeleteById(id);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
