import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { SecurityService } from '@/security/security.service';
import { User } from '#/generated/prisma/graphql/user/user.model';
import { CreateOneUserArgs } from '#/generated/prisma/graphql/user/create-one-user.args';

@Resolver()
export class SecurityResolver {
  constructor(private securityService: SecurityService) {}

  @Mutation(() => User)
  async registration(@Args() args: CreateOneUserArgs) {
    return this.securityService.registration(args);
  }
}
