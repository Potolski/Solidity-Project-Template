import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
import chai from "chai";
import { Wallet } from "ethers";
const { expect } = chai;

async function deployTemplate() {
  const Template = await ethers.getContractFactory("Template");

  const templateToken = await Template.deploy();

  return { templateToken };
}

// Creates addresses for testing
export const createUsers = async (numberOfUsers: number): Promise<string[]> => {
  const users: string[] = [];
  for (let i = 0; i < numberOfUsers; i++) {
    const user = new Wallet(Wallet.createRandom(), ethers.provider);
    users.push(user.address);
  }
  return users;
};

// Tests ownership after deployment
describe("Deployment tests", function () {
  it("Deployment should set the right owner", async function () {
    const [owner] = await ethers.getSigners();
    const { templateToken } = await loadFixture(deployTemplate);
    expect(await templateToken.owner()).to.equal(owner.address);
  });
});

describe("Minting tests", function () {
  it("Wallet is empty", async function () {
    const [, casualUser] = await ethers.getSigners();

    const { templateToken } = await loadFixture(deployTemplate);

    // Before minting the user shouldn't have any tokens
    expect(await templateToken.balanceOf(casualUser.address)).to.be.equal(0);
  });
});
