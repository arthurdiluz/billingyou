import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { FindCustomerDto } from '../dtos/find-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CustomerRepository } from '../repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  create({ userId, ...body }: CreateCustomerDto) {
    return this.customerRepository.create({
      data: {
        User: { connect: { id: userId } },
        ...body,
      },
    });
  }

  find(query: FindCustomerDto) {
    return this.customerRepository.findMany({
      where: {
        deletedAt: null,
        ...query,
      },
    });
  }

  findById(id: string) {
    return this.customerRepository.findUnique({ where: { id } });
  }

  update(id: string, body: UpdateCustomerDto) {
    return this.customerRepository.update({
      where: { id },
      data: { ...body },
    });
  }

  softDelete(id: string) {
    return this.customerRepository.softDelete({ where: { id } });
  }
}
