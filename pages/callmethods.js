const { ethers, Wallet } = require("ethers");
import { digitalIdIssuerJson } from "./artifacts/DigitalIdIssuer.js";

//Very insecure. Should only be kept on server. Just using for testing now
const mnemonic = "hen copper robot core disagree " +"casual rigid jeans census hidden come dawn";
const publicKey = "0x0b11F6e8DD4cb39C7F956af4bEA4342dDF8Dd677";


function unpackArtifact(artifactPath){
    let contractData = artifactPath;
    const contractBytecode = contractData.bytecode;
    const contractABI = contractData.abi;

    const constructorArgs = contractABI.filter((itm) => {
        return itm.type == 'constructor';
    });
    let constructorStr;
    if(constructorArgs.length < 1) {
        constructorStr = "    -- No constructor arguments -- ";
    }
    return {
        abi: contractABI,
        bytecode: contractBytecode,
        description:`  ${contractData.contractName}\n    ${constructorStr}`
    };
}

function connectWallet(network){
    var wallet;
    var connectedWallet;
    const provider = new ethers.providers.InfuraProvider(network,  "565196f96c8445138bbcd7373c7e7b09");
    /* const provider = ethers.providers.InfuraProvider(network, { //getDefaultProvider
      infura: "565196f96c8445138bbcd7373c7e7b09"
    }); */
    if(mnemonic != "") {
      wallet = Wallet.fromMnemonic(mnemonic);
      connectedWallet = wallet.connect(provider);
      return connectedWallet;
  }
    return provider;
}

let overrides = {
    gasLimit: 800000
};

var signer = connectWallet("ropsten"); //Connect to ropsten testnet

export async function readId(setName){
    let tokenUnpacked = unpackArtifact(digitalIdIssuerJson); //Unpack DigitalIdIssuer contract details. create with 'npx buidler compile'
    //console.log(tokenUnpacked.abi);
    var contractAddress = "0xC5a94B4DB4A87a6713a97cBE3C828704918bCa6c"; //Deployed address to request DigitalIdIssuer
    var myAddress = "0x66D56D0B0Bc2Ff5e9d553D83B9f91227CF46aAd0"; //User address
    const digitalIdIssuerContract = new ethers.Contract(contractAddress, tokenUnpacked.abi, signer); //Get instance of DigitalIdIssuer contract
    digitalIdIssuerContract.name().then(console.log); //Get name of contract
    //var verifiedPersonIdNumber = digitalIdIssuerContract.issueId(myAddress, "Philip Rego", "JSONMetadataURI", overrides).then(console.log).catch(console.log); //Call contract to send DigitalIdIssuer to my address
    var result =  await digitalIdIssuerContract.getVerifiedName(5);
    console.log("result:"+result);
    setName(result);
    return result;
}

// export function tryToExport(setName){
//     return issueId(digitalIdIssuerJson, setName);
// }

export async function getIdNumber(account, setName, setIdNumber){
  console.log("account"+account);
  let tokenUnpacked = unpackArtifact(digitalIdIssuerJson); //Unpack DigitalIdIssuer contract details.
  var contractAddress = "0xC5a94B4DB4A87a6713a97cBE3C828704918bCa6c"; //Deployed address to request DigitalIdIssuer
  const digitalIdIssuerContract = new ethers.Contract(contractAddress, tokenUnpacked.abi, signer); //Get instance of DigitalIdIssuer contract

    digitalIdIssuerContract.balanceOf(account).then((balance) => {
      if (balance != 0) {
        digitalIdIssuerContract.tokenOfOwnerByIndex(account, 0).then((idNumber) => {
          digitalIdIssuerContract.getVerifiedName(idNumber).then((name) => {
            setName(name);
            setIdNumber(idNumber);
          });
        });
      } else{
        setName("ID not found");
      }
    });
}

export function issueId(account, name){
  let tokenUnpacked = unpackArtifact(digitalIdIssuerJson); //Unpack DigitalIdIssuer contract details.
  var contractAddress = "0xC5a94B4DB4A87a6713a97cBE3C828704918bCa6c"; //Deployed address to request DigitalIdIssuer
  const digitalIdIssuerContract = new ethers.Contract(contractAddress, tokenUnpacked.abi, signer); //Get instance of DigitalIdIssuer contract
  var verifiedPersonIdNumber = digitalIdIssuerContract.issueId(account, name, "JSONMetadataURI", overrides).then(console.log).catch(console.log); //Call contract to send DigitalIdIssuer to my address
}