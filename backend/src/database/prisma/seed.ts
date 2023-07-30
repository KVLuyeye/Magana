import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const User1 = await prisma.user.upsert({
    where: { ID: 1 },
    update: {},
    create: {
      SCA_ID: '0x5fbdb2315678afecb367f032d93f642f64180aa3',
      Firstname: 'Joshua',
      Lastname: 'Luyeye',
      Role: 'ADMIN',
      Tel: 41778150552,
      PIN: '123456',
    },
  });

  console.log(User1);
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
