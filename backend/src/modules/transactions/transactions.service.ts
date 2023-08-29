import { Injectable } from '@nestjs/common';
import { EthersService } from '../ethers/ethers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { ethers } from 'ethers';
import { ABI, ByteCode } from '../ethers/constants';

@Injectable()
export class TransactionsService {
  private privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
  // ...

  constructor(private ethersService: EthersService, private prisma: PrismaService) {}

  async send(senderAddress: string, recipientAddress: string, amount: number) {
    try {
      // Create an instance of the Wallet using the private key
      const wallet = new ethers.Wallet(this.privateKey, this.ethersService.provider);

      // Create an instance of the Smart Contract using the Wallet
      const accountContract = new ethers.Contract(
        senderAddress, // Contract address
        ABI, // Contract ABI
        wallet, // Use the Wallet instance to sign transactions
      );

      // Call the transfer function on the Smart Contract instance
      const tx = await accountContract.transfer(recipientAddress, ethers.parseEther(amount.toString()));

      // Wait for the transaction to be mined
      await tx.wait();
      const transactionHash = tx.hash;
      this.saveTransaction(senderAddress, recipientAddress, amount, transactionHash);

      // Transaction successful
      return true;
    } catch (error) {
      console.error('Error sending funds:', error);
      return false;
    }
  }

  async saveTransaction(senderAddress: string, recipientAddress: string, amount: number, transactionHash: string) {
    try {
      const transaction = await this.prisma.transactions.create({
        data: {
          TransactionHash: transactionHash,
          From: '',
          SCA_ID: senderAddress,
          To: recipientAddress,
          Amount: amount,
          executed: new Date(),
        },
      });

      console.log('Transaction saved:', transaction);
    } catch (error) {
      console.error('Error saving transaction:', error);
    }
  }
}
