const { ethers } = require("ethers");
const abi = require("./abi.json");
require("dotenv").config();

const providerUrl = process.env.PROVIDER_KEY;

const contractAddress = "0x58659688bdF1c45fE0e78a11ff77b0d318C1b5c5";

const getSomething = () => {
  // declare provider
  // connect provider
  //send action
  //get action
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const tokenContract = new ethers.Contract(contractAddress, abi, provider);
  const data = tokenContract.getTodoItem(1).then((data) => console.log(data));
};

getSomething();
