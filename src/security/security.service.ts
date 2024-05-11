import { Injectable } from '@nestjs/common';
import { PrismaService } from '#/prisma/prisma.service';
import { hash } from 'bcryptjs';
import { CreateOneUserArgs } from '#/generated/prisma/graphql/user/create-one-user.args';
import { MailService } from '@/mail/mail.service';
import { env } from '#/.env';

@Injectable()
export class SecurityService {
  constructor(
    private prismaService: PrismaService,
    private mailService: MailService,
  ) {}

  async registration({ data: { email, password } }: CreateOneUserArgs) {
    const candidate = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует`,
      );
    }
    const hashPassword = await hash(password, Number(env.SALT));
    const user = await this.prismaService.user.create({
      data: { email, password: hashPassword },
    });
    await this.mailService.sendActivation(email);
    return user;
  }
}
