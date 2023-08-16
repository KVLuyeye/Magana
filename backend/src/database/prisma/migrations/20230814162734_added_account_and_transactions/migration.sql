-- CreateTable
CREATE TABLE "Account" (
    "SCA_ID" TEXT NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("SCA_ID")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "TransactionHash" TEXT NOT NULL,
    "From" TEXT NOT NULL,
    "To" TEXT NOT NULL,
    "Amount" INTEGER NOT NULL,
    "SCA_ID" TEXT NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("TransactionHash")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_SCA_ID_key" ON "Account"("SCA_ID");

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_SCA_ID_key" ON "Transactions"("SCA_ID");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_SCA_ID_fkey" FOREIGN KEY ("SCA_ID") REFERENCES "User"("SCA_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_SCA_ID_fkey" FOREIGN KEY ("SCA_ID") REFERENCES "User"("SCA_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
