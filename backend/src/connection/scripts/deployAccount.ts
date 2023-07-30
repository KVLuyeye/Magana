import { ethers } from "hardhat";

async function main() {
  const Account = await ethers.getContractFactory("Account");

  const account = await Account.deploy();

  await account.deployed();

  console.log(`Smart Contract Wallet deployed to: ${account.address}`);

  const balance = await account.getBalance();
  console.log(`Current Balance: ${ethers.utils.formatEther(balance)}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
