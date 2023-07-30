import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  getAllUser() {
    return this.userService.findAllUsers();
  }

  @Post('newUser')
  async createUser(@Res() res: Response, @Body() user: User) {
    try {
      await this.userService.createUser(
        user.Firstname,
        user.Lastname,
        Number(user.Tel),
        user.PIN,
      );

      res.json(user); // Send the user object as the response
      console.log(`
      Firstname: ${user.Firstname}
      Name: ${user.Lastname},
      Tel: ${user.Tel}
      PIN: ${user.PIN},
      `);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: 'An error occurred while creating the user.' });
    }
  }
}
