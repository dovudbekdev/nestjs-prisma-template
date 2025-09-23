import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './modules/prisma';

@Module({
  imports: [UserModule, PrismaModule],
})
export class AppModule {}
