import { ethers } from 'hardhat';

async function sendFunds() {
  const privateKey = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'; // Replace with the private key of the sender account
  const senderAddress = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266';
  const recipientAddress = '0xdF9D56938117978B392A859147578fe365255323';

  const provider = new ethers.providers.JsonRpcProvider('http://127.0.0.1:8545/'); // Replace with the URL of your Ethereum provider (e.g., Infura)

  // Create a wallet using the private key
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get the balance of the sender account
  const balance = await wallet.getBalance();
  console.log(`Sender balance: ${ethers.utils.formatEther(balance)} ETH`);

  // Amount of ETH to send
  const amountToSend = ethers.utils.parseEther('700'); // 1.0 ETH

  // Check if the sender has sufficient balance to send the amount
  if (balance.lt(amountToSend)) {
    console.log('Insufficient balance to send funds.');
    return;
  }

  // Send the transaction
  const transaction = await wallet.sendTransaction({
    to: recipientAddress,
    value: amountToSend,
  });

  console.log('Transaction hash:', transaction.hash);
}

sendFunds()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
