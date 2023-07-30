import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";
import { expect } from "chai";

describe("Wallet", function () {
  let wallet: any;
  let owner: any;
  let account1: any;
  let account2: any;

  before(async function () {
    [owner, account1, account2] = await ethers.getSigners();

    const WalletContract = await ethers.getContractFactory("Wallet");
    wallet = await WalletContract.deploy();
    await wallet.deployed();
  });

  it("should have the owner set correctly", async function () {
    expect(await wallet.owner()).to.equal(owner.address);
  });

  it("should add a debit account successfully", async function () {
    await wallet.addAccount(account1.address, 0); // 0 represents AccountType.Debit
    const account = await wallet.accounts(account1.address);

    expect(account.accountType).to.equal(0); // 0 represents AccountType.Debit
    expect(account.active).to.equal(true);
  });

  it("should add a savings account successfully", async function () {
    await wallet.addAccount(account2.address, 1); // 1 represents AccountType.Savings
    const account = await wallet.accounts(account2.address);

    expect(account.accountType).to.equal(1); // 1 represents AccountType.Savings
    expect(account.active).to.equal(true);
  });

  it("should not allow adding the same account twice", async function () {
    await expect(wallet.addAccount(account1.address, 0)).to.be.revertedWith(
      "Account already exists."
    );
  });

  it("should allow transfer from debit account to savings account", async function () {
    const initialBalance = await ethers.provider.getBalance(account2.address);

    await wallet
      .connect(account1)
      .transfer(account2.address, ethers.utils.parseEther("1"));

    const finalBalance = await ethers.provider.getBalance(account2.address);
    const expectedBalance = initialBalance.add(ethers.utils.parseEther("1"));

    expect(finalBalance).to.equal(expectedBalance);
  });

  it("should not allow transfer from savings account to debit account", async function () {
    await expect(
      wallet
        .connect(account2)
        .transfer(account1.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("Transfer not allowed with this account.");
  });

  it("should not allow transfer from an inactive account", async function () {
    await wallet.addAccount(account1.address, 0); // Deactivate the account
    await expect(
      wallet
        .connect(account1)
        .transfer(account2.address, ethers.utils.parseEther("1"))
    ).to.be.revertedWith("Invalid account.");
  });
});
