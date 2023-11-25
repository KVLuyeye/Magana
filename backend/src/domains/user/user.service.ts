import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { EthersService } from 'src/domains/ethers/ethers.service';
import { PrismaService } from 'src/domains/prisma/prisma.service';

@Injectable()
export class UserService {
  private static currentUserId: string | null;

  constructor(private prisma: PrismaService, private ethers: EthersService) {}

  // Method to set the current user's SCA_ID when they log in
  /**
   * Sets the current user ID.
   * @param SCA_ID - The ID of the current user.
   */
  setCurrentUser(SCA_ID: string) {
    UserService.currentUserId = SCA_ID;
  }

  // Method to get the current user's SCA_ID
  /**
   * Returns the ID of the current user, or null if no user is logged in.
   * @returns {string} The ID of the current user, or null if no user is logged in.
   */
  getCurrentUser(): string {
    return UserService.currentUserId;
  }

  /**
   * Creates a new user with the given information.
   * @param {string} FirstName - The first name of the user.
   * @param {string} LastName - The last name of the user.
   * @param {number} Tel - The telephone number of the user.
   * @param {string} PIN - The PIN of the user.
   * @returns {Promise<void>} - A promise that resolves when the user is created.
   */
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

  /**
   * Finds a user by their SCA_ID.
   * @param SCA_ID - The SCA_ID of the user to find.
   * @returns A Promise that resolves to the found User object, or null if no user was found.
   */
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

  /**
   * Retrieves all users from the database.
   * @returns A JSON string representing the list of users, with BigInt values converted to strings.
   */
  async findAllUsers() {
    const users = await this.prisma.user.findMany();

    return JSON.stringify(users, (user, Tel) => (typeof Tel === 'bigint' ? Tel.toString() : Tel)); // Convert BigInt to string
  }
}
