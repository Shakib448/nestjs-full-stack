import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

@Injectable({})
export class AuthService {
  signUp() {
    return { message: "I'm signed up" };
  }

  signIn() {
    return { message: "I'm signIn up" };
  }
}
