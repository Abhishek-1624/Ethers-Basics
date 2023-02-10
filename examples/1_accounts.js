//In this we are going to learn about ETHERS.JS as suggested by name it is a javascript library which helps us interact with 
//the blockchain

//Importing ethers.js
const { ethers } = require("ethers");

/*JSON-RPC API is a popular method for interacting with Ethereum and is available in all major Ethereum node implementations
as well as many 3rd party web service like infura what we will be using now ,We are doing this on the goerli testnet*/
//This is a valid connection to the blockchain
const INFURA_ID = 'd7d829f2478f4f3a9a00add1789b823d';
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`);

const address = "0xd9bde1ef165f3E29D1F3eA75773e73c2FB1F0a06";

//Here we create a main function using async await so that other 
const main = async () => {
    //How do we get the balance using ethers
    const balance = await provider.getBalance(address);
    console.log(`ETH balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH`);
}

main();




