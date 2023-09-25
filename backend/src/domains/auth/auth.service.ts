import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/domains/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async signIn(SCA_ID: string, PIN: string): Promise<any> {
    const user = await this.userService.findUser(SCA_ID);
    if (user?.PIN !== PIN) {
      throw new UnauthorizedException();
    }
    const payload = {
      SCA_ID: user.SCA_ID,
    };
    this.userService.setCurrentUser(SCA_ID);
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp() {}
}
