import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { UserService } from '../user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { EthersService } from './ethers.service';
import { AppModule } from 'src/app.module';

@Module({
  imports: [UserModule],
  exports: [EthersService],
  providers: [PrismaService, EthersService],
})
export class EthersModule {}
