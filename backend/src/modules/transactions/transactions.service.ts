import { Injectable } from '@nestjs/common';
import { EthersService } from '../ethers/ethers.service';
import { ethers } from 'ethers';
import { UserService } from '../user/user.service';
import jwt_decode from 'jwt-decode';
import { ABI, ByteCode } from '../ethers/constants';

@Injectable()
export class TransactionsService {
  private privateKey =
    '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';

  // ...

  constructor(private ethersService: EthersService, userService: UserService) {}

  async send(recipientAddress: string, amount: number) {
    try {
      // Create an instance of the Wallet using the private key
      const wallet = new ethers.Wallet(
        this.privateKey,
        this.ethersService.provider,
      );

      // Create an instance of the Smart Contract using the Wallet
      const accountContract = new ethers.Contract(
        '0x5fbdb2315678afecb367f032d93f642f64180aa3', // Contract address
        ABI, // Contract ABI
        wallet, // Use the Wallet instance to sign transactions
      );

      // Call the transfer function on the Smart Contract instance
      const tx = await accountContract.transfer(
        recipientAddress,
        ethers.parseEther(amount.toString()),
      );

      // Wait for the transaction to be mined
      await tx.wait();

      // Transaction successful
      return true;
    } catch (error) {
      console.error('Error sending funds:', error);
      return false;
    }
  }
}
