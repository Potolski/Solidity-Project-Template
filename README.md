# Template 2022 Smart contract

This repository contains the solidity smart contract for a template contract made in 2022, as well as unit tests and a deployment script

## Requirements

To install hardhat and all requirements to compile and test the smart contracts in this repository, run the following command at the root of this repository. It might require sudo permission

```bash
$ npm install --save-dev hardhat
```

## Setup

### Install dependencies

Install all the necessary dependencies, and compile.

```bash
$ npm ci
$ npm run compile
```

### Compile contract 

```bash
$ npx hardhat compile
```

### Environmental variables

Create a file called `.env` at the root of this folder. 
This file will contain credentials used for deployment and gas cost verification and should look like this:

```bash
TEST_PRIVATE_KEY="Private key for mumbai testnet wallet"
MAIN_PRIVATE_KEY="Private key for polygon mainnet wallet"
POLYGONSCAN_API_KEY="Polygonscan API Key, used for gas cost verification"
REPORT_GAS=<true OR false>
```

For more information on how this works, please read the documentation of the `npm` package [`dotenv`](https://www.npmjs.com/package/dotenv).

- [Polygon API documentation](https://docs.polygonscan.com/getting-started/viewing-api-usage-statistics)
- [Metamask wallet](https://metamask.io)

## Running unit tests

```bash
$ npx hardhat test
```

## Deploy contract

You can choose to deploy the contract on 3 different networks:

1. Hardhat local testnet

```bash
$ npx hardhat run scripts/deploy.ts 
```

  2. Mumbai testnet (Polygon)
  3. Polygon mainnet

To deploy the contract on either mumbai or polygon mainnet you'll need to have wallet's set up and their private key's stored in the `.env` file.

```bash
$ npx hardhat run scripts/deploy.ts --network <mumbai/polygon>
```
