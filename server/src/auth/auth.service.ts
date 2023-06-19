import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signUp(dto: AuthDto) {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(dto.password, salt);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        password: hash,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
    });

    delete user.password;

    return user;
  }

  signIn() {
    return { message: "I'm signIn up" };
  }
}
