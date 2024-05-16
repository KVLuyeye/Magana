import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const ALCHEMY_API_KEY = 'hYpuZ0etXeZyZkibF2Hui9Jx0bv8PxQR';
const SEPOLIA_PRIVATE_KEY = 'a207c8262c084160cbb13643357359207b5b04a2ef93ea15210213ec232a303c';

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};

export default config;
