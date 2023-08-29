import { Injectable } from '@nestjs/common';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class AccountService {
  ethersService: EthersService;

  constructor(private prisma: PrismaService) {}

  async getBalance(SCA_ID: string) {
    return await this.ethersService.getBalance(SCA_ID);
  }

  async getTransactionsHistory(SCA_ID: string) {
    return await this.prisma.transactions.findMany({
      where: {
        SCA_ID: SCA_ID,
      },
    });
  }

  withdraw() {}

  deposit() {}
}
