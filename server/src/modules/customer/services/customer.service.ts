import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { FindCustomerDto } from '../dtos/find-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CustomerRepository } from '../repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  async create({ userId, ...body }: CreateCustomerDto) {
    return await this.customerRepository.create({
      data: {
        User: { connect: { id: userId } },
        ...body,
      },
      include: {
        User: true,
      },
    });
  }

  async findById(id: string) {
    return await this.customerRepository.findUnique({
      where: { id },
    });
  }

  async find(query: FindCustomerDto) {
    return this.customerRepository.findMany({
      where: { ...query },
      include: { User: true },
    });
  }

  async updateById(id: string, body: UpdateCustomerDto) {
    return this.customerRepository.update({
      where: { id },
      data: { ...body },
      include: { User: true },
    });
  }

  async softDeleteById(id: string) {
    return this.customerRepository.update({
      where: { id },
      data: { deletedAt: new Date() },
      include: { User: true },
    });
  }
}
