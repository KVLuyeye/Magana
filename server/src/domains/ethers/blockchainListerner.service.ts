import { Injectable, OnModuleInit } from '@nestjs/common';
import { ethers } from 'ethers';
import { TransactionsService } from '../transactions/transactions.service';
import { ABI, ByteCode } from '../ethers/constants';

@Injectable()
export class BlockchainListenerService implements OnModuleInit {
  private readonly provider: ethers.JsonRpcProvider;
  private readonly contract: ethers.Contract;

  constructor(private transactionsService: TransactionsService) {
    this.provider = new ethers.JsonRpcProvider('http://127.0.0.1:8545/');
    this.contract = new ethers.Contract('0x5FbDB2315678afecb367f032d93F642f64180aa3', ABI, this.provider);
  }

  onModuleInit() {
    this.listenForIncomingTransactions();
  }

  private listenForIncomingTransactions() {
    this.contract.on('Transfer', (from, to, value, event) => {
      console.log(`Received funds: ${value.toString()} from ${from} to ${to}`);
      // Save the transaction in your database
      this.transactionsService.saveTransaction(to, Number(ethers.formatEther(value)), event.transactionHash, '', from);
    });
  }
}
