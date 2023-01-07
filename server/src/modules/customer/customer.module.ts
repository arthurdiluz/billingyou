import { Module } from '@nestjs/common';
import { CustomerService } from './services/customer.service';
import { CustomerController } from './controllers/customer.controller';
import { PrismaService } from 'src/database/prisma.service';
import { CustomerRepository } from './repositories/customer.repository';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [CustomerController],
  providers: [PrismaService, CustomerService, CustomerRepository],
  exports: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
