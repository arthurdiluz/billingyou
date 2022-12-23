import {
  BadRequestException,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from '../services/auth.service';
import { User } from '../decorators/auth.decorator';
import { AuthDto } from '../dtos/auth.dto';
import { UserService } from 'src/modules/user/services/user.service';

@ApiTags('Authentication')
@Controller('api/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: AuthDto })
  @UseGuards(AuthGuard('local'))
  async signIn(@User() auth: AuthDto) {
    try {
      if (!auth) throw new BadRequestException(`Missing email or password`);

      const user = await this.userService.findByEmail(auth?.email);

      if (!user) throw new BadRequestException(`User not loaded`);

      return this.authService.signIn(user);
    } catch (error) {
      throw error;
    }
  }
}
