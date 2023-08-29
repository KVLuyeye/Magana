import { Controller, Get, Res, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';

@Controller('account')
export class AccountController {
  constructor(private ethersService: EthersService, private accountService: AccountService) {}

  @Get('balance')
  async getBalance(@Res() res: Response, @Query('SCA_ID') SCA_ID: string) {
    try {
      const balance = await this.ethersService.getBalance(SCA_ID);

      res.json(balance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while getting the balance.' });
    }
  }

  @Get('transactionHistory')
  async getTransactionsHistory(@Res() res: Response, @Query('SCA_ID') SCA_ID: string) {
    try {
      const history = await this.accountService.getTransactionsHistory(SCA_ID);

      res.json(history);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while getting the transaction history.' });
    }
  }
}
