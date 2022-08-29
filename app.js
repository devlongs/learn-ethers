const { ethers } = require("ethers");
const abi = require("./abi.json");
require("dotenv").config();

const providerUrl = process.env.PROVIDER_KEY;

const contractAddress = "0x58659688bdF1c45fE0e78a11ff77b0d318C1b5c5";

const getTodo = async () => {
  // declare provider
  // connect provider
  //send action
  //get action
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const todoContract = new ethers.Contract(contractAddress, abi, provider);
  const todoItem = await todoContract.getTodoItem(1);
  console.log(todoItem);
};

getTodo();
