import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { EthersService } from '../ethers/ethers.service';
import { AccountService } from './account.service';
import { UserService } from '../user/user.service';

@Module({
  providers: [EthersService, AccountService, UserService],
  exports: [AccountService],
  imports: [PrismaModule],
})
export class AccountModule {}
