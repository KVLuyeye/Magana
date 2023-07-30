-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "ID" SERIAL NOT NULL,
    "SCA_ID" TEXT NOT NULL,
    "Firstname" TEXT NOT NULL,
    "Lastname" TEXT NOT NULL,
    "PIN" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Tel" BIGINT NOT NULL,
    "Role" "Role" NOT NULL DEFAULT 'USER',
    "joined" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_SCA_ID_key" ON "User"("SCA_ID");

-- CreateIndex
CREATE UNIQUE INDEX "User_Tel_key" ON "User"("Tel");
