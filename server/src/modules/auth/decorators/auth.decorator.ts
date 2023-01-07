import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: Request, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user: Prisma.UserUncheckedCreateInput = request?.user;

    return user;
  },
);
