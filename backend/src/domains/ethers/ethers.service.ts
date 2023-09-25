import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider, Contract, ContractFactory, Wallet, WebSocketProvider } from 'ethers';

import { ABI, ByteCode } from './constants';

@Injectable()
export class EthersService {
  private networkURL = 'http://127.0.0.1:8545/';

  public provider: JsonRpcProvider = new JsonRpcProvider(this.networkURL);

  constructor() {
    // Create an instance of the Ethereum provider
    this.provider = new ethers.JsonRpcProvider(this.networkURL);
  }

  //Deploy Contract
  public async deployAccount(): Promise<string> {
    const AccountABI = ABI;
    const AccountBytecode = ByteCode;

    const privateKey = 'a207c8262c084160cbb13643357359207b5b04a2ef93ea15210213ec232a303c';
    const signer = new Wallet(privateKey, this.provider);

    const Account = new ContractFactory(AccountABI, AccountBytecode, signer);

    const account = await Account.deploy();

    const address = account.getAddress();

    return address;
  }
  // Create the contract instance

  public getAccountContract(address: string): Contract {
    const AccountABI = ABI;

    return new Contract(address, AccountABI, this.provider);
  }

  public async getBalance(address: string): Promise<string> {
    // Get the balance of an Ethereum address
    const balance = await this.provider.getBalance(address);

    return ethers.formatEther(balance);
  }
}
