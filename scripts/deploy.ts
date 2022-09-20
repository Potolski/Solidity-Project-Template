import { ethers } from "hardhat";

async function main() {
  const Template = await ethers.getContractFactory("Template");
  const template = await Template.deploy();

  await template.deployed();

  console.log(`Template Event Contract deployed to ${template.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
