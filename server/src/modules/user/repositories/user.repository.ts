import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(args);
  }

  public findMany({ where: _where, ...args }: Prisma.UserFindManyArgs) {
    const { firstName, lastName, email, ...where } = _where;

    return this.prismaService.user.findMany({
      where: {
        firstName: { startsWith: firstName as string },
        lastName: { startsWith: lastName as string },
        email: { startsWith: email as string },
        ...where,
      },
      ...args,
    });
  }

  public findUnique(args: Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(args);
  }

  public update(args: Prisma.UserUpdateArgs) {
    const { data, ...others } = args;

    return this.prismaService.user.update({
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
