import { Injectable } from '@nestjs/common';
import { EthersService } from '../ethers/ethers.service';
import { ethers } from 'ethers';

@Injectable()
export class TransactionsService {
  constructor(private ethersService: EthersService) {}

  async send() {
    const contract = this.ethersService.getAccountContract(
      '0x5FbDB2315678afecb367f032d93F642f64180aa3',
    );

    try {
      const tx = await contract.transfer(
        '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
        100,
        { gasLimit: 200000 },
      );
      await tx.wait(); // Wait for the transaction to be mined
      return tx.hash; // Return the transaction hash
    } catch (error) {
      console.error('Error sending transaction:', error.message);
      throw error; // Rethrow the error to be caught by the controller
    }
  }
}
