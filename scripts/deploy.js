const {ethers} = require("hardhat");
const { verify } = require("../utils/verify");

async function main() {
  const Collection = await ethers.getContractFactory("Collection")
  const collection = await Collection.deploy()
  await collection.deployed()
  console.log("Contract deployed to address:", collection.address)
  await collection.deployTransaction.wait(6);
  console.log("-------------------------------------------------------------")
  await verify(collection.address, []);
  console.log("contract verified")
  console.log("----------------------------------------------------");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })