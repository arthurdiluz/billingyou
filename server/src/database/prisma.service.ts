import { Injectable, OnModuleInit } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  // tells Prisma to connect to database as soon as the application is launched
  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: NestApplication) {
    // resolves Prisma's conflicts with NesTJS' shutdown signal
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
