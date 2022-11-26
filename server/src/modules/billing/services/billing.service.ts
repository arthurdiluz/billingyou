import { Injectable } from '@nestjs/common';
import { BillingStatus } from '@prisma/client';
import { DateTime as dt } from 'luxon';
import { CustomerRepository } from 'src/modules/customer/repositories/customer.repository';
import { CreateBillingDto } from '../dtos/create-billing.dto';
import { FindBillingDto } from '../dtos/find-billing.dto';
import { UpdateBillingDto } from '../dtos/update-billing.dto';
import { BillingRepository } from '../repositories/billing.repository';

@Injectable()
export class BillingService {
  constructor(
    private readonly billingRepository: BillingRepository,
    private readonly customerRepository: CustomerRepository,
  ) {}

  create({ userId, customerId, ...body }: CreateBillingDto) {
    return this.billingRepository.create({
      data: {
        User: { connect: { id: userId } },
        Customer: { connect: { id: customerId } },
        status: BillingStatus.PENDING,
        ...body,
      },
    });
  }

  find(query: FindBillingDto) {
    return this.billingRepository.findMany({
      where: {
        deletedAt: null,
        ...query,
      },
    });
  }

  findById(id: string) {
    return this.billingRepository.findUnique({ where: { id } });
  }

  update(id: string, body: UpdateBillingDto) {
    return this.billingRepository.update({
      where: { id },
      data: { ...body },
    });
  }

  softDelete(id: string) {
    return this.billingRepository.softDelete({ where: { id } });
  }

  async dashboard() {
    const billings = await this.billingRepository.groupBy({
      by: ['dueDate', 'status'],
      _sum: { value: true },
      where: { deletedAt: null },
    });

    const history = billings?.map(({ dueDate, _sum, status }) => ({
      dueDate: dt.fromJSDate(dueDate).toFormat('yyyy-MM-dd'),
      value: Number(_sum?.value),
      status,
    }));

    const late = history
      .filter(({ status }) => status === BillingStatus.LATE)
      .reduce((total, current) => (total += current.value), 0);

    const pending = history
      .filter(({ status }) => status === BillingStatus.PENDING)
      .reduce((total, current) => (total += current.value), 0);

    const paid = history
      .filter(({ status }) => status === BillingStatus.PAID)
      .reduce((total, current) => (total += current.value), 0);

    const customers = await this.customerRepository.count({
      where: { deletedAt: null },
    });

    return {
      late,
      pending,
      paid,
      history,
      customers,
    };
  }
}
