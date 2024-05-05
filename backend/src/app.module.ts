import { Module } from '@nestjs/common';

import { UserController } from './domains/user/user.controller';
import { AccountController } from './domains/account/account.controller';
import { TransactionsController } from './domains/transactions/transactions.controller';
import { EthersService } from './domains/ethers/ethers.service';
import { AccountService } from './domains/account/account.service';
import { TransactionsService } from './domains/transactions/transactions.service';
import { UserService } from 'src/domains/user/user.service';
import { AuthController } from './domains/auth/auth.controller';
import { AuthService } from './domains/auth/auth.service';
import { AuthModule } from './domains/auth/auth.module';
import { UserModule } from './domains/user/user.module';
import { PrismaService } from './domains/prisma/prisma.service';
import { PrismaModule } from './domains/prisma/prisma.module';
import { AccountModule } from './domains/account/account.module';
import { NotificationsService } from './domains/notifications/notifications.service';
import { EthersModule } from './domains/ethers/ethers.module';
import { BlockchainListenerService } from './domains/ethers/blockchainListerner.service';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, AccountModule, EthersModule],
  controllers: [UserController, AccountController, TransactionsController, AuthController],
  providers: [
    EthersService,
    AccountService,
    TransactionsService,
    UserService,
    AuthService,
    PrismaService,
    NotificationsService,
    BlockchainListenerService,
  ],
})
export class AppModule {}
