import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('send')
  async send(
    @Res() res: Response,
    @Body('senderAddress') senderAddress: string,
    @Body('recipientAddress') recipientAddress: string,
    @Body('amount') amount: number,
  ) {
    try {
      // Assuming this.transactionsService.send returns a promise
      await this.transactionsService.send(senderAddress, recipientAddress, amount);

      return res.status(HttpStatus.OK).json({
        message: 'Transaction sent successfully',
        senderAddress: senderAddress,
        recipientAddress: recipientAddress,
        amount: amount,
      });
    } catch (error) {
      console.error(error);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'An error occurred while sending the transaction',
      });
    }
  }
}
