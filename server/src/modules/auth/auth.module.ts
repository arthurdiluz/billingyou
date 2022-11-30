import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from 'src/database/prisma.service';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthRepository } from './repositories/auth.repository';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(), // read .env
    JwtModule.register({
      privateKey: process.env['JWT_SECRET'],
      signOptions: { expiresIn: '1h' },
    }),
    PassportModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [PrismaService, AuthService, AuthRepository, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
