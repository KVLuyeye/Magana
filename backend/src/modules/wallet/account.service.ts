import { Injectable } from '@nestjs/common';
import { EthersService } from 'src/modules/ethers/ethers.service';

@Injectable()
export class AccountService {
  ethersService: EthersService;

  constructor() {}

  async getBalance(SCA_ID: string) {
    await this.ethersService.getBalance(SCA_ID);
  }

  withdraw() {}

  deposit() {}
}
