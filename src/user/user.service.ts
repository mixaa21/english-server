import { Injectable } from '@nestjs/common';

import { PrismaService } from '#/prisma/prisma.service';
import { User } from '#/generated/prisma/graphql/user/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUsers(): Promise<Array<User>> {
    return this.prisma.user.findMany();
  }
}
