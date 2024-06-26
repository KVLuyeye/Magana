import { Injectable } from '@nestjs/common';
import { EthersService } from 'src/domains/ethers/ethers.service';
import { ethers } from 'ethers';
import { PrismaService } from 'src/domains/prisma/prisma.service';
import { UserService } from '../user/user.service';
import { ABI, ByteCode } from '../ethers/constants';
import { TransactionsService } from '../transactions/transactions.service';

@Injectable()
export class AccountService {
  private privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
  ethersService: EthersService;
  transactionsService: TransactionsService;
  user: UserService;

  constructor(private prisma: PrismaService) {}

  /**
   * Retrieves the balance of a given smart contract account from the network.
   * @param SCA_ID - The ID of the smart contract account to retrieve the balance for.
   * @returns A Promise that resolves to the balance of the smart contract account.
   */
  async getBalance(SCA_ID: string) {
    return await this.ethersService.getBalance(SCA_ID);
  }

  /**
   * Retrieves the transaction history for a given SCA_ID from the database.
   * @param SCA_ID - The ID of the SCA to retrieve transaction history for.
   * @returns A Promise that resolves to an array of transaction objects.
   */
  async getTransactionsHistory(SCA_ID: string) {
    return await this.prisma.transactions.findMany({
      where: {
        SCA_ID: SCA_ID,
      },
    });
  }

  withdraw() {}

  deposit(amount: string) {}
}
