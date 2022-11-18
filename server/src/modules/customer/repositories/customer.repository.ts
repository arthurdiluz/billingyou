import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.CustomerCreateArgs) {
    return this.prismaService.customer.create(args);
  }

  public findUnique(args: Prisma.CustomerFindUniqueOrThrowArgs) {
    return this.prismaService.customer.findUniqueOrThrow(args);
  }

  public findMany(args: Prisma.CustomerFindManyArgs) {
    return this.prismaService.customer.findMany(args);
  }

  public update(args: Prisma.CustomerUpdateArgs) {
    return this.prismaService.customer.update(args);
  }
}
