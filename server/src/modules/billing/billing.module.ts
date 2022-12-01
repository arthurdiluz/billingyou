import { Module } from '@nestjs/common';
import { BillingService } from './services/billing.service';
import { BillingController } from './controllers/billing.controller';
import { PrismaService } from 'src/database/prisma.service';
import { BillingRepository } from './repositories/billing.repository';
import { CustomerModule } from '../customer/customer.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [CustomerModule, UserModule, CustomerModule],
  controllers: [BillingController],
  providers: [PrismaService, BillingService, BillingRepository],
  exports: [BillingService, BillingRepository],
})
export class BillingModule {}
