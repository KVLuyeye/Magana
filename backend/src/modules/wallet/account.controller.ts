import { Controller, Get, Res } from '@nestjs/common';
import { AccountService } from './account.service';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';

@Controller('wallet')
export class AccountController {
  constructor(
    private ethersService: EthersService,
    private walletService: AccountService,
  ) {}

  @Get('balance')
  async getBalance(@Res() res: Response) {}
}
