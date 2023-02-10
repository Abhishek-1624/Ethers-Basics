//Now lets create transactions with ethers.js
//Lets say we need to send some crypto currency we can do these basic type of transaction in ethers.js
const { ethers } = require("ethers");

const INFURA_ID = 'd7d829f2478f4f3a9a00add1789b823d';
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/${INFURA_ID}`)

const account1 = '0x38a219364B6A40dd47c01F1893c0BFE8bE1a8fd3';
const account2 = '0xd9bde1ef165f3E29D1F3eA75773e73c2FB1F0a06';

const privatekey1 = '0fed7b513feb2bc706cee748c969cba3799566e09b13c4e4a9f298837d7ff61b';
//To make these transaction happen we need to create an wallet and this is how we do it using Ethers.js
const wallet = new ethers.Wallet(privatekey1,provider);

const main = async () => {
    //Show account1 balance before transfer
    const senderBalanceBefore = await provider.getBalance(account1);
    //Show account2 balance before transfer
    const receiverBalanceBefore = await provider.getBalance(account2);

    console.log(`\n Sender balance before : ${ethers.utils.formatEther(senderBalanceBefore)}`);
    console.log(`Receiver balance before : ${ethers.utils.formatEther(receiverBalanceBefore)}`);

    //This is the command we use to send the Ether
    //Send Ether
    const tx = await wallet.sendTransaction({
        to:account2,
        value:ethers.utils.parseEther("0.025")
    });

    //To see information about the transaction
    //Fetch Transaction and also we nned to wait for the transaction to be mined
    await tx.wait();
    console.log(tx);

    //Show account1 balance after transfer
    const senderBalanceAfter = await provider.getBalance(account1);
    //Show account2 balance after transfer
    const receiverBalanceAfter = await provider.getBalance(account2);
    console.log(`\n Sender balance after : ${ethers.utils.formatEther(senderBalanceAfter)}`);
    console.log(`Receiver balance after : ${ethers.utils.formatEther(receiverBalanceAfter)}`);

}

main()