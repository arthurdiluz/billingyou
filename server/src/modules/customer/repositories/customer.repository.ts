import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CustomerRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.CustomerCreateArgs) {
    return this.prismaService.customer.create(args);
  }

  public findMany({ where: _where, ...args }: Prisma.CustomerFindManyArgs) {
    const { name, cpfCnpj, email, phone, ...where } = _where;

    return this.prismaService.customer.findMany({
      where: {
        name: { contains: name as string },
        cpfCnpj: { startsWith: cpfCnpj as string },
        email: { startsWith: email as string },
        phone: { startsWith: phone as string },
        ...where,
      },
      ...args,
    });
  }

  public findUnique(args: Prisma.CustomerFindUniqueArgs) {
    return this.prismaService.customer.findUnique(args);
  }

  public count(args: Prisma.CustomerCountArgs) {
    return this.prismaService.customer.count(args);
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
