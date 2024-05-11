import { Module } from '@nestjs/common';
import { SecurityResolver } from './security.resolver';
import { SecurityService } from './security.service';
import { PrismaService } from '#/prisma/prisma.service';
import { MailService } from '@/mail/mail.service';

@Module({
  providers: [SecurityResolver, SecurityService, PrismaService, MailService],
})
export class SecurityModule {}
