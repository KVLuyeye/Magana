import { Controller, Get, Res, Query } from '@nestjs/common';
import { AccountService } from './account.service';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';

@Controller('account')
export class AccountController {
  constructor(private ethersService: EthersService) {}

  @Get('balance')
  async getBalance(@Res() res: Response, @Query('SCA_ID') SCA_ID: string) {
    try {
      // Add any necessary validation for SCA_ID here, if needed

      const balance = await this.ethersService.getBalance(SCA_ID);

      res.json(balance);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'An error occurred while getting the balance.' });
    }
  }
}
