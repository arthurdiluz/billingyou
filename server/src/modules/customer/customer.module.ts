import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CustomerRepository } from './repositories/customer.repository';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [PrismaService, CustomerService, CustomerRepository],
  exports: [],
})
export class CustomerModule {}
