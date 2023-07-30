import { Module } from '@nestjs/common';

import { UserController } from './modules/user/user.controller';
import { AccountController } from './modules/wallet/account.controller';
import { TransactionsController } from './modules/transactions/transactions.controller';
import { NotificationsController } from './modules/notifications/notifications.controller';
import { EthersService } from './modules/ethers/ethers.service';
import { AccountService } from './modules/wallet/account.service';
import { TransactionsService } from './modules/transactions/transactions.service';
import { UserService } from './modules/user/user.service';
import { AuthController } from './modules/auth/auth.controller';
import { AuthService } from './modules/auth/auth.service';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { PrismaService } from './modules/prisma/prisma.service';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule],
  controllers: [
    UserController,
    AccountController,
    TransactionsController,
    NotificationsController,
    AuthController,
  ],
  providers: [
    EthersService,
    AccountService,
    TransactionsService,
    UserService,
    AuthService,
    PrismaService,
  ],
})
export class AppModule {}
