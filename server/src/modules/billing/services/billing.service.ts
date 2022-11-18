import { Injectable } from '@nestjs/common';
import { BillingStatus } from '@prisma/client';
import { CreateBillingDto } from '../dtos/create-billing.dto';
import { FindBillingDto } from '../dtos/find-billing.dto';
import { UpdateBillingDto } from '../dtos/update-billing.dto';
import { BillingRepository } from '../repositories/billing.repository';

@Injectable()
export class BillingService {
  constructor(private readonly billingRepository: BillingRepository) {}

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
}
