import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signUp')
  signUp() {
    return "I'm signed up";
  }

  @Post('signIn')
  signIn() {
    return "I'm signIn up";
  }
}
