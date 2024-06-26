import { Body, Controller, Get, Post, Res, Query } from '@nestjs/common';
import { Response, response } from 'express';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  findAllUser() {
    return this.userService.findAllUsers();
  }

  @Post('newUser')
  async createUser(@Res() res: Response, @Body() user: User) {
    try {
      await this.userService.createUser(user.Firstname, user.Lastname, Number(user.Tel), user.PIN);

      res.json(user); // Send the user object as the response
      console.log(`
      Firstname: ${user.Firstname}
      Name: ${user.Lastname},
      Tel: ${user.Tel}
      PIN: ${user.PIN},
      `);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while creating the user.' });
    }
  }

  @Get('findUser')
  async findUser(@Res() res: Response, @Query('SCA_ID') SCA_ID: string) {
    try {
      const user = await this.userService.findUser(SCA_ID);
      if (user) {
        return res.json(user);
      } else {
        return res.status(404).json({ message: 'User not found.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while finding the user.' });
    }
  }

  @Get('currentUser')
  async getCurrentUser(@Res() response: Response) {
    return response.json(this.userService.getCurrentUser());
  }
}
