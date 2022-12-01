import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotAcceptableException,
  NotFoundException,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerService } from 'src/modules/customer/services/customer.service';
import { UserService } from 'src/modules/user/services/user.service';
import { CreateBillingDto } from '../dtos/create-billing.dto';
import { FindBillingDto } from '../dtos/find-billing.dto';
import { UpdateBillingDto } from '../dtos/update-billing.dto';
import { BillingService } from '../services/billing.service';

@ApiTags('Billing')
@Controller('api/billing')
export class BillingController {
  constructor(
    private readonly billingService: BillingService,
    private readonly customerService: CustomerService,
    private readonly userService: UserService,
  ) {}

  @Get('dashboard')
  async dashboard() {
    try {
      return await this.billingService.dashboard();
    } catch (Error) {
      throw Error;
    }
  }

  @Post()
  async create(@Body() body: CreateBillingDto) {
    try {
      const { userId, customerId } = body;

      const user = await this.userService.findById(userId);
      const customer = await this.customerService.findById(customerId);

      if (!user) {
        throw new NotFoundException(`User ID "${userId}" not found`);
      }

      if (user?.deletedAt) {
        throw new ConflictException('User already deleted');
      }

      if (!customer) {
        throw new NotFoundException(`Customer ID "${customerId}" not found`);
      }

      if (customer?.deletedAt) {
        throw new ConflictException('Customer already deleted');
      }

      return await this.billingService.create(body);
    } catch (Error) {
      throw Error;
    }
  }

  @Get()
  async find(@Query() query: FindBillingDto) {
    try {
      return await this.billingService.find(query);
    } catch (Error) {
      throw Error;
    }
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    try {
      const billing = await this.billingService.findById(id);

      if (!billing) {
        throw new NotFoundException(`Billing ID "${id}" not found`);
      }

      return billing;
    } catch (Error) {
      throw Error;
    }
  }

  @Patch(':id')
  async update(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
    @Body() body: UpdateBillingDto,
  ) {
    try {
      const billing = await this.billingService.findById(id);

      if (!billing) {
        throw new NotFoundException(`Billing ID "${id}" not found`);
      }

      if (new Date(body?.dueDate) < new Date()) {
        throw new NotAcceptableException(`Date ${body?.dueDate} has expired`);
      }

      return await this.billingService.update(id, body);
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
      const billing = await this.billingService.findById(id);

      if (!billing) {
        throw new NotFoundException(`Billing ID "${id}" not found`);
      }

      if (billing?.deletedAt) {
        throw new ConflictException('Billing already deleted');
      }

      return await this.billingService.softDelete(id);
    } catch (Error) {
      throw Error;
    }
  }
}
