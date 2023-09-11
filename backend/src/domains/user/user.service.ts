import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { EthersService } from 'src/modules/ethers/ethers.service';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  private currentUserId: string | null = null;

  constructor(private prisma: PrismaService, private ethers: EthersService) {}

  // Method to set the current user's SCA_ID when they log in
  setCurrentUser(SCA_ID: string) {
    this.currentUserId = SCA_ID;
  }

  // Method to get the current user's SCA_ID
  getCurrentUser(): string | null {
    return this.currentUserId;
  }

  async createUser(FirstName: string, LastName: string, Tel: number, PIN: string) {
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
    const user = await this.prisma.user.findUnique({
      where: {
        SCA_ID: SCA_ID,
      },
    });

    if (user) {
      return JSON.parse(
        JSON.stringify(user, (key, value) => (typeof value === 'bigint' ? value.toString() : value)),
      ) as User; // Convert BigInt to string
    }
    return user;
  }

  async findAllUsers() {
    const users = await this.prisma.user.findMany();

    return JSON.stringify(users, (user, Tel) => (typeof Tel === 'bigint' ? Tel.toString() : Tel)); // Convert BigInt to string
  }
}
