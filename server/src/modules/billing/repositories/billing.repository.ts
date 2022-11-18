import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class BillingRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.BillingCreateArgs) {
    return this.prismaService.billing.create(args);
  }

  public findUnique(args: Prisma.UserFindUniqueOrThrowArgs) {
    return this.prismaService.billing.findUniqueOrThrow(args);
  }

  public findMany(args: Prisma.BillingFindManyArgs) {
    return this.prismaService.billing.findMany(args);
  }

  public update(args: Prisma.BillingUpdateArgs) {
    return this.prismaService.billing.update(args);
  }
}
