import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  public create(args: Prisma.UserCreateArgs) {
    return this.prismaService.user.create(args);
  }

  public findUnique(args: Prisma.UserFindUniqueOrThrowArgs) {
    return this.prismaService.user.findUniqueOrThrow(args);
  }

  public findMany(args: Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(args);
  }

  public update(args: Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(args);
  }
}
