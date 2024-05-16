import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/domains/prisma/prisma.module';
import { EthersService } from '../ethers/ethers.service';
import { EthersModule } from '../ethers/ethers.module';

@Module({
  providers: [UserService, EthersService],
  exports: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
