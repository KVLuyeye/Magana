import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { EthersService } from '../ethers/ethers.service';

@Module({
  providers: [UserService, EthersService],
  exports: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}