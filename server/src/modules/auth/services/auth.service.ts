import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Utils } from 'src/common/helpers/utils';
import { UserService } from 'src/modules/user/services/user.service';
import IUser from 'src/modules/user/interfaces/user.interface';
import IAuth from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(user: IUser) {
    const token = this.jwtService.sign(user);
    const expiresIn = Utils.getExpirationDateFromToken(token);

    return { token, expiresIn, user };
  }

  async validateLocal({ email, password }: IAuth) {
    try {
      const user = await this.userService.findByEmail(email);

      if (!user) {
        throw new UnauthorizedException(`Invalid credentials`);
      }

      const { password: userPassword, ..._user } = user;

      if (!Utils.isValidPassword(password, userPassword)) {
        throw new UnauthorizedException(`Invalid credentials`);
      }

      return _user;
    } catch (error) {
      throw error;
    }
  }
}
