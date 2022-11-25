import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BillingRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.BillingCreateArgs) {
    return this.prismaService.billing.create(args);
  }

  public findMany(args: Prisma.BillingFindManyArgs) {
    return this.prismaService.billing.findMany(args);
  }

  public findUnique(args: Prisma.UserFindUniqueOrThrowArgs) {
    return this.prismaService.billing.findUniqueOrThrow(args);
  }

  public update(args: Prisma.BillingUpdateArgs) {
    const { data, ...others } = args;

    return this.prismaService.billing.update({
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
