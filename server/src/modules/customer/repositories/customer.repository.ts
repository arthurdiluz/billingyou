import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.CustomerCreateArgs) {
    return this.prismaService.customer.create(args);
  }

  public findMany(args: Prisma.CustomerFindManyArgs) {
    return this.prismaService.customer.findMany(args);
  }

  public findUnique(args: Prisma.CustomerFindUniqueOrThrowArgs) {
    return this.prismaService.customer.findUniqueOrThrow(args);
  }

  public update(args: Prisma.CustomerUpdateArgs) {
    const { data, ...others } = args;

    return this.prismaService.customer.update({
      data: {
        updatedAt: new Date(),
        ...data,
      },
      ...others,
    });
  }

  public softDelete(args: Prisma.UserDeleteArgs) {
    const date = new Date();

    return this.prismaService.user.update({
      data: {
        updatedAt: date,
        deletedAt: date,
      },
      ...args,
    });
  }
}