import { Controller, Post, Body, Res } from '@nestjs/common';
import { Response } from 'express';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { TransferDTO } from './DTO/transactions.dto';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionsService: TransactionsService) {}

  @Post('send') //The type of the param here should be a DTO to determine the way in which the Data from the client is being stored on the server
  async send(@Res() res: Response) {
    try {
      const tx = await this.transactionsService.send();
      res.json(tx);
    } catch (error) {
      // Handle any errors that may occur during the transaction execution
      res.status(500).json(error);
    }
  }
}
