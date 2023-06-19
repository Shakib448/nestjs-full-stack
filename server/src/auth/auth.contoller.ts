import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp(@Body() dto: AuthDto) {
    return this.authService.signUp(dto);
  }

  @Post('signIn')
  async signIn(@Body() dto: AuthDto) {
    const { access_token } = await this.authService.signIn(dto);

    // res
    //   .cookie('Authorization', access_token, {
    //     httpOnly: true,
    //     secure: false,
    //     sameSite: 'lax',
    //     expires: new Date(15 * 60 * 1000),
    //   })
    //   .send({ status: 'ok' });

    return { access_token };
  }
}
