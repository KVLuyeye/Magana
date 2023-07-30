import { Injectable } from '@nestjs/common';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { DigitalWalletDTO } from './DTO/Wallet.dto';

@Injectable()
export class AccountService {
  ethersService: EthersService;
  digitalWallet: DigitalWalletDTO;

  constructor() {}

  async getBalance() {
    await this.ethersService.getBalance(
      '0x5fbdb2315678afecb367f032d93f642f64180aa3',
    );
  }

  withdraw() {}

  deposit() {}
}
