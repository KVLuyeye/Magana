import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService, private ethersService: EthersService) {}

  @Post('send')
  async send(
    @Res() res: Response,
    @Body('senderAddress') senderAddress: string,
    @Body('recipientAddress') recipientAddress: string,
    @Body('amount') amount: number,
  ) {
    try {
      await this.transactionsService.send(senderAddress, recipientAddress, amount);

      console.log('Transaction sent successfully');
      console.log('Fee: ' + amount * 0.005);
      console.log(
        'Current balance: ' + (await this.ethersService.getBalance('0xdf9d56938117978b392a859147578fe365255323')),
      );

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