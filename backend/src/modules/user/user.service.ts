import { Injectable } from '@nestjs/common';
// import { User } from './User';
import { User } from '@prisma/client';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  public allUsers = [];

  constructor(private prisma: PrismaService, private ethers: EthersService) {}

  async createUser(
    FirstName: string,
    LastName: string,
    Tel: number,
    PIN: string,
  ) {
    const SCA_ID = await this.ethers.deployAccount();

    await this.prisma.user.create({
      data: {
        SCA_ID: SCA_ID,
        Firstname: FirstName,
        Lastname: LastName,
        Tel: BigInt(Tel),
        PIN: PIN,
      },
    });
  }

  async findUser(SCA_ID: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        SCA_ID: SCA_ID,
      },
    });
  }

  async findAllUsers() {
    const users = await this.prisma.user.findMany();
    return users.map((user) => ({
      ...user,
      tel: user.Tel.toString(), // Convert BigInt to string
    }));
  }
}
