import { Injectable } from '@nestjs/common';
import { EthersService } from '../ethers/ethers.service';
import { PrismaService } from 'src/domains/prisma/prisma.service';
import { ethers, Subscriber } from 'ethers';
import { ABI, ByteCode } from '../ethers/constants';
import { UserService } from '../user/user.service';

@Injectable()
export class TransactionsService {
  private privateKey = 'a207c8262c084160cbb13643357359207b5b04a2ef93ea15210213ec232a303c';
  // ...

  constructor(private ethersService: EthersService, private prisma: PrismaService, private user: UserService) {}

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

      // Calculate the amount for the recipient (95% of the original amount)
      const recipientAmount = ethers.parseEther((amount * 0.9995).toString());

      // Calculate the fee (5% of the original amount)
      const feeAmount = ethers.parseEther((amount * 0.0005).toString());

      const txRecipient = await accountContract.transfer(recipientAddress, recipientAmount);

      // Wait for the recipient transaction to be mined
      await txRecipient.wait();

      const txFee = await accountContract.transfer(wallet.address, feeAmount);

      // Wait for the fee transaction to be mined
      await txFee.wait();

      // Call the transfer function on the Smart Contract instance
      const tx = await accountContract.transfer(recipientAddress, ethers.parseEther(amount.toString()));

      // Wait for the transaction to be mined
      const receipt = await tx.wait();
      if (receipt.status === 0) {
        throw new Error('Transaction failed');
      }

      const transactionHash = tx.hash;
      this.saveTransaction(senderAddress, amount, transactionHash, recipientAddress, '');

      const filter = {
        address: accountContract.address,
        topics: [ethers.id('Transfer(address,address,uint256)')],
      };

      // Transaction successful
      return true;
    } catch (error) {
      console.error('Error sending funds:', error);
      throw error;
    }
  }

  async receive() {
    try {
      // Create an instance of the Wallet using the private key
      const wallet = new ethers.Wallet(this.privateKey, this.ethersService.provider);

      // Create an instance of the Smart Contract using the Wallet
      const accountContract = new ethers.Contract(
        this.user.getCurrentUser(), // Use the wallet's address
        ABI, // Contract ABI
        wallet, // Use the Wallet instance to sign transactions
      );

      // Listen for the "Transfer" event, which is emitted when funds are received
      accountContract.on('Transfer', async (from, to, value, event) => {
        // Handle the received funds event here
        console.log('Received funds:');
        console.log('From:', from);
        console.log('To:', to);
        console.log('Value:', value.toString());

        // Save the received transaction
        const transactionHash = event.transactionHash;
        this.saveTransaction(to, Number(ethers.formatEther(value)), transactionHash, '', from);
      });
    } catch (error) {
      console.error('Error listening for received funds:', error);
    }
  }

  async saveTransaction(account: string, amount: number, transactionHash: string, To?: string, From?: string) {
    try {
      const transaction = await this.prisma.transactions.create({
        data: {
          TransactionHash: transactionHash,
          From: From,
          SCA_ID: account,
          To: To,
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
