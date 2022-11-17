/** @type import('hardhat/config').HardhatUserConfig */
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  networks: {
    dev: {
      url: "http://127.0.0.1:8545",
    },
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        process.env.MUMBAI_PRIVATE_KEY
          ? process.env.MUMBAI_PRIVATE_KEY
          : "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
    polygon: {
      url: "https://polygon-rpc.com/",
      chainId: 137,
      accounts: [
        process.env.POLYGON_PRIVATE_KEY
          ? process.env.POLYGON_PRIVATE_KEY
          : "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [
        process.env.MAIN_PRIVATE_KEY
          ? process.env.MAIN_PRIVATE_KEY
          : "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [
        process.env.GOERLI_PRIVATE_KEY
          ? process.env.GOERLI_PRIVATE_KEY
          : "0x0000000000000000000000000000000000000000000000000000000000000000",
      ],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
      ? process.env.ETHERSCAN_API_KEY
      : process.env.POLYGONSCAN_API_KEY,
  },
  gasReporter: {
    token: "MATIC",
    enabled: !!process.env.REPORT_GAS,
    gasPriceApi: process.env.POLYGONSCAN_API_KEY,
  },
  solidity: "0.8.16",
};

export default config;
