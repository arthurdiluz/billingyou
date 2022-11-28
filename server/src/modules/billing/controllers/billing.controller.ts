import {
  BadRequestException,
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
import { CreateBillingDto } from '../dtos/create-billing.dto';
import { FindBillingDto } from '../dtos/find-billing.dto';
import { UpdateBillingDto } from '../dtos/update-billing.dto';
import { BillingService } from '../services/billing.service';

@ApiTags('Billing')
@Controller('api/billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('dashboard')
  async dashboard() {
    try {
      return await this.billingService.dashboard();
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Post()
  async create(@Body() body: CreateBillingDto) {
    try {
      return await this.billingService.create(body);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Get()
  async find(@Query() query: FindBillingDto) {
    try {
      return await this.billingService.find(query);
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  @Get(':id')
  async findById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    try {
      return await this.billingService.findById(id);
    } catch (error) {
      throw new BadRequestException(error?.message);
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
    } catch (error) {
      throw new BadRequestException(error?.message);
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
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }
}
