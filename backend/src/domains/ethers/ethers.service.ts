import { Injectable } from '@nestjs/common';
import { ethers, JsonRpcProvider, Contract, ContractFactory, Wallet, WebSocketProvider } from 'ethers';
import { UserService } from 'src/domains/user/user.service';
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
  /**
   * Deploys a new account contract and returns its address.
   * @returns The address of the newly deployed account contract.
   */
  public async deployAccount(): Promise<string> {
    const AccountABI = ABI;
    const AccountBytecode = ByteCode;

    const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
    const signer = new Wallet(privateKey, this.provider);

    const Account = new ContractFactory(AccountABI, AccountBytecode, signer);

    const account = await Account.deploy();

    const address = account.getAddress();

    return address;
  }

  public async deposit(amount: string, SCA_ID: string) {
    const AccountABI = ABI;
    const AccountBytecode = ByteCode;
    const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80';
    const signer = new Wallet(privateKey, this.provider);

    console.log('The amount to be sent:', amount);
    const amountToSend = ethers.parseEther(amount);

    // Send the transaction

    const transaction = await signer.sendTransaction({
      to: SCA_ID,
      value: amountToSend.toString(),
    });

    console.log('Transaction hash:', transaction.hash);
  }

  /**
   * Returns a new instance of the Contract class for the specified address and ABI.
   * @param address The address of the contract.
   * @returns A new instance of the Contract class.
   */
  public getAccountContract(address: string): Contract {
    const AccountABI = ABI;

    return new Contract(address, AccountABI, this.provider);
  }

  /**
   * Gets the balance of an Ethereum address.
   * @param address The Ethereum address to get the balance of.
   * @returns A Promise that resolves to a string representing the balance of the address in Ether.
   */
  public async getBalance(address: string): Promise<string> {
    // Get the balance of an Ethereum address
    const balance = await this.provider.getBalance(address);

    return ethers.formatEther(balance);
  }
}
