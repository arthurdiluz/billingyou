import {
  BadRequestException,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import IUser from 'src/modules/user/interfaces/user.interface';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  @UseGuards(AuthGuard('local'))
  async signIn(@Request() req: any) {
    try {
      const user: IUser = req?.user || undefined;

      if (!user) throw new BadRequestException(`User not loaded`);

      return this.authService.signIn(user);
    } catch (error) {
      throw error;
    }
  }
}
