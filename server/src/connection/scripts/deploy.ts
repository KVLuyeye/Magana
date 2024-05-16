import { ethers } from 'hardhat';

async function main() {
  const [deployer] = await ethers.getSigners();

  const Account = await ethers.getContractFactory('Account');

  const account = await Account.deploy();

  await account.deployed();

  console.log('Deploying contracts with the account:', deployer.address);

  const token = await ethers.deployContract('Account');

  console.log('Account address:', await token.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
