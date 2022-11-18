import { Module } from '@nestjs/common';
import { BillingService } from './services/billing.service';
import { BillingController } from './controllers/billing.controller';
import { PrismaService } from 'src/database/prisma.service';
import { BillingRepository } from './repositories/billing.repository';

@Module({
  imports: [],
  controllers: [BillingController],
  providers: [PrismaService, BillingService, BillingRepository],
  exports: [],
})
export class BillingModule {}
