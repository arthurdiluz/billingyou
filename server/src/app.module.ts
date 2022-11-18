import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BillingModule } from './modules/billing/billing.module';
import { CustomerModule } from './modules/customer/customer.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, CustomerModule, BillingModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
