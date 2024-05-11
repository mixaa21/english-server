import { Query, Resolver } from '@nestjs/graphql';
import { UserService } from '@/user/user.service';
import { User } from '#/generated/prisma/graphql/user/user.model';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => [User])
  async user() {
    const a = await this.userService.getUsers();
    return a;
  }
}
