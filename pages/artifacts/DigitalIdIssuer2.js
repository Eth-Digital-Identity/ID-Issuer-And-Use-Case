export const  digitalIdIssuerJson = {
  "contractName": "DigitalIdIssuer",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "baseURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "verifiedPerson",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "verifiedName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "issueId",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idNumber",
          "type": "uint256"
        }
      ],
      "name": "getVerifiedName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idNumber",
          "type": "uint256"
        }
      ],
      "name": "getVerifiedAddress",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idNumber",
          "type": "uint256"
        }
      ],
      "name": "getVerifiedSsn",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idNumber",
          "type": "uint256"
        }
      ],
      "name": "getVerifiedIncome",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idNumber\",\"type\":\"uint256\"}],\"name\":\"getVerifiedAddress\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idNumber\",\"type\":\"uint256\"}],\"name\":\"getVerifiedIncome\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idNumber\",\"type\":\"uint256\"}],\"name\":\"getVerifiedName\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"idNumber\",\"type\":\"uint256\"}],\"name\":\"getVerifiedSsn\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"verifiedPerson\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"verifiedName\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"issueId\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"/home/phil/hackathon/erc721-digital-id/contracts/DigitalIdIssuer.sol\":\"DigitalIdIssuer\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/phil/hackathon/erc721-digital-id/contracts/DigitalIdIssuer.sol\":{\"keccak256\":\"0xef35c5516a39d4dd815babd2d75a14b58336bc1f8f4f489d3ba8046d334730f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b03603b96329762bb0eb794101ad421b57becf63f949fd7d8f84ca2ae45878e0\",\"dweb:/ipfs/QmUet1jYrhe5ZpTFE7co4V1tnLC97sdqyoA6KFmFHHjd6y\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xb046d18f9d09683ca1c0ed6d80c61da8a8a7d9b30bad70a17b898538683eff74\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4728713afa6ae36cc9e92c7107c796a313add3ec20f813be2cde76c814486b2a\",\"dweb:/ipfs/QmUJBTXvYaGDF5PVnd5pUvYerc9DRXvqANDzgCzAp3FkkA\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xfa152b6e88a1dc50780e8f1580426dc23ad2e1e2c2f086a088adf206a202f453\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://5127b264994adab88fae419b1c493efc5acd07134c19ee5c0397e50018291ebf\",\"dweb:/ipfs/QmWwJZVhvdmvUCdimbb6R2Jiu59zjPqm6XTMchM6LaEHAp\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0xfc398838759c3248bdca40f7bc060e789c8d715df22f9eee7494bcafe14fa1b8\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://ca2e28a5681be0558b2de6a24c107299925f8bd9e3244e9a70b033d6eab782c8\",\"dweb:/ipfs/QmX5kRT4Gwq4GQYfEdxVsE7PALpGfQEuQJhsfpCap9inKm\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xaf936da92f3a9a4f98b237323b5eb1d813fb86c4d07a184beba7027cf0509ba3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://aaa210e132e06975eb9f20060db6ba7dee78f6fce691a1c2489525584de521c0\",\"dweb:/ipfs/QmRwzi4nUW3UWBwhY5ik2xW3JZo9NMLN5UyGi1xPpMQYrh\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x3636662804cd8f474536b2875a9038a4c3fb91879f1bbff48af5c3f140fcd2f0\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://9fab8521263fa581544000cb57335a3f2e6bcdfbb5579d3ceaa5acf741c67c4f\",\"dweb:/ipfs/QmZfXnMom7JSNtfyie5yGPN1SUC4SmHbz4ScVBH88URmA7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xe7f984cedc00a138dc27f263c73c32ba9a4b2fd23b6c34ac46f46c074b943538\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://0f4acda12f076fe7584921241ddbb5b460ca7cad6cb8a42252ac7f2a9f539127\",\"dweb:/ipfs/QmQmfhkEv9GrhdWe67QtXnU19AMuoEmy31QnHPkucdYLjZ\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x321ee37ef4925020aa818a03ec7fe48e057561f65ab009a84f6c20c86026ade7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://01f9d74a17a56024984251b97e428e24c9d3abffbae5bd290f0ec263c82e9694\",\"dweb:/ipfs/QmRryCuuXu2ukrDmatB8TqdEhPLiK6NBRt41RiPUaX1qKy\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xf5fa8cbdffa5ef8be49b246b5628facc30b71707e78a45d80d93b64eff3fe390\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://774e78a9ff32792cc95db4d2ceaf3a7965bb7f0bea5e6cb7cff182b450d44b37\",\"dweb:/ipfs/QmRRMC4uj7eAcLW7chynA3sNEYULMFazdLwQHKHQPyzAbA\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x2d68b8e6425249cd05cc0a66ea50cb5b8d10cbdac59c6de834e1002232813faf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://e3ce6b6ac17c67bba01e9c8c778f82f68fd4823bd083359cdd03040b70eeeba3\",\"dweb:/ipfs/QmX4t1jWwKaAkacvmQxEG5rBtLXg3EHw6pRjKhMZR8iw3n\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x244e4b74b17716120cf28e58636f11c699b8c0c94628bd952a95cee038d7e32b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://198d566157120c526bd6b5086b32cae85a11389b8a538f533ba9f9447915da0e\",\"dweb:/ipfs/QmeE6d8KWERx7f1FVS5tMnitNJxBm2yWXRSEUBF7R6voLh\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x79484115dbfa737054f73e041009a02eeb434dd81be5d684bf4255ad3b5ab558\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://12c119699463450c2544f5b9d8709b5e9e9164c62948a79c3ec53423a051d969\",\"dweb:/ipfs/QmPJduzSAaekq447QeFqAp3E7dc8CnNk5ajofckJ4ahA7Q\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b50604080518082018252600a815269111a59da5d185b08125160b21b60208083019190915282518084019093526002835261125160f21b90830152906200005f6301ffc9a760e01b620000c9565b8151620000749060069060208501906200014e565b5080516200008a9060079060208401906200014e565b506200009d6380ac58cd60e01b620000c9565b620000af635b5e139f60e01b620000c9565b620000c163780e9d6360e01b620000c9565b5050620001ea565b6001600160e01b0319808216141562000129576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019157805160ff1916838001178555620001c1565b82800160010185558215620001c1579182015b82811115620001c1578251825591602001919060010190620001a4565b50620001cf929150620001d3565b5090565b5b80821115620001cf5760008155600101620001d4565b61216280620001fa6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80636352211e116100b8578063a22cb4651161007c578063a22cb465146104ff578063b88d4fde1461052d578063c87b56dd146105f3578063e985e9c514610610578063f0a75f1f1461063e578063f95c36001461065b57610142565b80636352211e1461036f5780636c0360eb1461038c57806370a082311461039457806395d89b41146103ba578063992d0eb7146103c257610142565b80631dcc516b1161010a5780631dcc516b1461028057806323b872dd1461029d5780632f745c59146102d35780633fa44d0c146102ff57806342842e0e1461031c5780634f6ccce71461035257610142565b806301ffc9a71461014757806306fdde0314610182578063081812fc146101ff578063095ea7b31461023857806318160ddd14610266575b600080fd5b61016e6004803603602081101561015d57600080fd5b50356001600160e01b031916610678565b604080519115158252519081900360200190f35b61018a61069b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c6004803603602081101561021557600080fd5b5035610731565b604080516001600160a01b039092168252519081900360200190f35b6102646004803603604081101561024e57600080fd5b506001600160a01b038135169060200135610793565b005b61026e61086e565b60408051918252519081900360200190f35b61018a6004803603602081101561029657600080fd5b503561087f565b610264600480360360608110156102b357600080fd5b506001600160a01b0381358116916020810135909116906040013561096b565b61026e600480360360408110156102e957600080fd5b506001600160a01b0381351690602001356109c2565b61018a6004803603602081101561031557600080fd5b50356109ed565b6102646004803603606081101561033257600080fd5b506001600160a01b03813581169160208101359091169060400135610aa1565b61026e6004803603602081101561036857600080fd5b5035610abc565b61021c6004803603602081101561038557600080fd5b5035610ad2565b61018a610afa565b61026e600480360360208110156103aa57600080fd5b50356001600160a01b0316610b5b565b61018a610bc3565b61026e600480360360608110156103d857600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561040357600080fd5b82018360208201111561041557600080fd5b8035906020019184600183028401116401000000008311171561043757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561048a57600080fd5b82018360208201111561049c57600080fd5b803590602001918460018302840111640100000000831117156104be57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c24945050505050565b6102646004803603604081101561051557600080fd5b506001600160a01b0381351690602001351515610c66565b6102646004803603608081101561054357600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561057e57600080fd5b82018360208201111561059057600080fd5b803590602001918460018302840111640100000000831117156105b257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d6b945050505050565b61018a6004803603602081101561060957600080fd5b5035610dc9565b61016e6004803603604081101561062657600080fd5b506001600160a01b0381358116916020013516611070565b61018a6004803603602081101561065457600080fd5b503561109e565b61018a6004803603602081101561067157600080fd5b5035611152565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b5050505050905090565b600061073c82611206565b6107775760405162461bcd60e51b815260040180806020018281038252602c81526020018061202b602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061079e82610ad2565b9050806001600160a01b0316836001600160a01b031614156107f15760405162461bcd60e51b81526004018080602001828103825260218152602001806120db6021913960400191505060405180910390fd5b806001600160a01b0316610803611213565b6001600160a01b0316148061082457506108248161081f611213565b611070565b61085f5760405162461bcd60e51b8152600401808060200182810382526038815260200180611f7e6038913960400191505060405180910390fd5b6108698383611217565b505050565b600061087a6002611285565b905090565b606061088a82611206565b6108c9576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600b602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b5093979650505050505050565b61097c610976611213565b82611290565b6109b75760405162461bcd60e51b81526004018080602001828103825260318152602001806120fc6031913960400191505060405180910390fd5b610869838383611334565b6001600160a01b03821660009081526001602052604081206109e49083611480565b90505b92915050565b60606109f882611206565b610a37576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600d602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b61086983838360405180602001604052806000815250610d6b565b600080610aca60028461148c565b509392505050565b60006109e782604051806060016040528060298152602001611fe060299139600291906114a8565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b60006001600160a01b038216610ba25760405162461bcd60e51b815260040180806020018281038252602a815260200180611fb6602a913960400191505060405180910390fd5b6001600160a01b03821660009081526001602052604090206109e790611285565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b6000610c30600a6114b5565b6000610c3c600a6114be565b9050610c4884826114c2565b610c5285826114e1565b610c5c818461160f565b90505b9392505050565b610c6e611213565b6001600160a01b0316826001600160a01b03161415610cd4576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610ce1611213565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610d25611213565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610d7c610d76611213565b83611290565b610db75760405162461bcd60e51b81526004018080602001828103825260318152602001806120fc6031913960400191505060405180910390fd5b610dc384848484611672565b50505050565b6060610dd482611206565b610e0f5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120ac602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610ea45780601f10610e7957610100808354040283529160200191610ea4565b820191906000526020600020905b815481529060010190602001808311610e8757829003601f168201915b505060095493945050505060026000196101006001841615020190911604610ecd579050610696565b805115610f9e576009816040516020018083805460018160011615610100020316600290048015610f355780601f10610f13576101008083540402835291820191610f35565b820191906000526020600020905b815481529060010190602001808311610f21575b5050825160208401908083835b60208310610f615780518252601f199092019160209182019101610f42565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050610696565b6009610fa9846116c4565b60405160200180838054600181600116156101000203166002900480156110075780601f10610fe5576101008083540402835291820191611007565b820191906000526020600020905b815481529060010190602001808311610ff3575b5050825160208401908083835b602083106110335780518252601f199092019160209182019101611014565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60606110a982611206565b6110e8576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600c602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b606061115d82611206565b61119c576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600e602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b60006109e760028361179f565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061124c82610ad2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006109e7826114be565b600061129b82611206565b6112d65760405162461bcd60e51b815260040180806020018281038252602c815260200180611f32602c913960400191505060405180910390fd5b60006112e183610ad2565b9050806001600160a01b0316846001600160a01b0316148061131c5750836001600160a01b031661131184610731565b6001600160a01b0316145b8061132c575061132c8185611070565b949350505050565b826001600160a01b031661134782610ad2565b6001600160a01b03161461138c5760405162461bcd60e51b81526004018080602001828103825260298152602001806120836029913960400191505060405180910390fd5b6001600160a01b0382166113d15760405162461bcd60e51b8152600401808060200182810382526024815260200180611f0e6024913960400191505060405180910390fd5b6113dc838383610869565b6113e7600082611217565b6001600160a01b038316600090815260016020526040902061140990826117ab565b506001600160a01b038216600090815260016020526040902061142c90826117b7565b50611439600282846117c3565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006109e483836117d9565b600080808061149b868661183d565b9097909650945050505050565b6000610c5c8484846118b8565b80546001019055565b5490565b6000818152600b60209081526040909120835161086992850190611e26565b6001600160a01b03821661153c576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61154581611206565b15611597576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6115a360008383610869565b6001600160a01b03821660009081526001602052604090206115c590826117b7565b506115d2600282846117c3565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b61161882611206565b6116535760405162461bcd60e51b815260040180806020018281038252602c815260200180612057602c913960400191505060405180910390fd5b6000828152600860209081526040909120825161086992840190611e26565b61167d848484611334565b61168984848484611982565b610dc35760405162461bcd60e51b8152600401808060200182810382526032815260200180611edc6032913960400191505060405180910390fd5b6060816116e957506040805180820190915260018152600360fc1b6020820152610696565b8160005b811561170157600101600a820491506116ed565b60608167ffffffffffffffff8111801561171a57600080fd5b506040519080825280601f01601f191660200182016040528015611745576020820181803683370190505b50859350905060001982015b831561179657600a840660300160f81b8282806001900393508151811061177457fe5b60200101906001600160f81b031916908160001a905350600a84049350611751565b50949350505050565b60006109e48383611aea565b60006109e48383611b02565b60006109e48383611bc8565b6000610c5c84846001600160a01b038516611c12565b8154600090821061181b5760405162461bcd60e51b8152600401808060200182810382526022815260200180611eba6022913960400191505060405180910390fd5b82600001828154811061182a57fe5b9060005260206000200154905092915050565b8154600090819083106118815760405162461bcd60e51b81526004018080602001828103825260228152602001806120096022913960400191505060405180910390fd5b600084600001848154811061189257fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816119535760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611918578181015183820152602001611900565b50505050905090810190601f1680156119455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061196657fe5b9060005260206000209060020201600101549150509392505050565b6000611996846001600160a01b0316611ca9565b6119a25750600161132c565b6060611ab0630a85bd0160e11b6119b7611213565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a1e578181015183820152602001611a06565b50505050905090810190601f168015611a4b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611edc603291396001600160a01b0388169190611caf565b90506000818060200190516020811015611ac957600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611bbe5783546000198083019190810190600090879083908110611b3557fe5b9060005260206000200154905080876000018481548110611b5257fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611b8257fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506109e7565b60009150506109e7565b6000611bd48383611aea565b611c0a575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556109e7565b5060006109e7565b600082815260018401602052604081205480611c77575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610c5f565b82856000016001830381548110611c8a57fe5b9060005260206000209060020201600101819055506000915050610c5f565b3b151590565b6060610c5c84846000856060611cc485611ca9565b611d15576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611d545780518252601f199092019160209182019101611d35565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611db6576040519150601f19603f3d011682016040523d82523d6000602084013e611dbb565b606091505b50915091508115611dcf57915061132c9050565b805115611ddf5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611918578181015183820152602001611900565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e6757805160ff1916838001178555611e94565b82800160010185558215611e94579182015b82811115611e94578251825591602001919060010190611e79565b50611ea0929150611ea4565b5090565b5b80821115611ea05760008155600101611ea556fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4469676974616c204944206e756d62657220646f6573206e6f742065787369744552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ee07475bfbb2766a12f1c781992dc40e5cccb60bb6e55dacfaf5e6b25754dde364736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101425760003560e01c80636352211e116100b8578063a22cb4651161007c578063a22cb465146104ff578063b88d4fde1461052d578063c87b56dd146105f3578063e985e9c514610610578063f0a75f1f1461063e578063f95c36001461065b57610142565b80636352211e1461036f5780636c0360eb1461038c57806370a082311461039457806395d89b41146103ba578063992d0eb7146103c257610142565b80631dcc516b1161010a5780631dcc516b1461028057806323b872dd1461029d5780632f745c59146102d35780633fa44d0c146102ff57806342842e0e1461031c5780634f6ccce71461035257610142565b806301ffc9a71461014757806306fdde0314610182578063081812fc146101ff578063095ea7b31461023857806318160ddd14610266575b600080fd5b61016e6004803603602081101561015d57600080fd5b50356001600160e01b031916610678565b604080519115158252519081900360200190f35b61018a61069b565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101c45781810151838201526020016101ac565b50505050905090810190601f1680156101f15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61021c6004803603602081101561021557600080fd5b5035610731565b604080516001600160a01b039092168252519081900360200190f35b6102646004803603604081101561024e57600080fd5b506001600160a01b038135169060200135610793565b005b61026e61086e565b60408051918252519081900360200190f35b61018a6004803603602081101561029657600080fd5b503561087f565b610264600480360360608110156102b357600080fd5b506001600160a01b0381358116916020810135909116906040013561096b565b61026e600480360360408110156102e957600080fd5b506001600160a01b0381351690602001356109c2565b61018a6004803603602081101561031557600080fd5b50356109ed565b6102646004803603606081101561033257600080fd5b506001600160a01b03813581169160208101359091169060400135610aa1565b61026e6004803603602081101561036857600080fd5b5035610abc565b61021c6004803603602081101561038557600080fd5b5035610ad2565b61018a610afa565b61026e600480360360208110156103aa57600080fd5b50356001600160a01b0316610b5b565b61018a610bc3565b61026e600480360360608110156103d857600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561040357600080fd5b82018360208201111561041557600080fd5b8035906020019184600183028401116401000000008311171561043757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929594936020810193503591505064010000000081111561048a57600080fd5b82018360208201111561049c57600080fd5b803590602001918460018302840111640100000000831117156104be57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c24945050505050565b6102646004803603604081101561051557600080fd5b506001600160a01b0381351690602001351515610c66565b6102646004803603608081101561054357600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561057e57600080fd5b82018360208201111561059057600080fd5b803590602001918460018302840111640100000000831117156105b257600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d6b945050505050565b61018a6004803603602081101561060957600080fd5b5035610dc9565b61016e6004803603604081101561062657600080fd5b506001600160a01b0381358116916020013516611070565b61018a6004803603602081101561065457600080fd5b503561109e565b61018a6004803603602081101561067157600080fd5b5035611152565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b820191906000526020600020905b81548152906001019060200180831161070a57829003601f168201915b5050505050905090565b600061073c82611206565b6107775760405162461bcd60e51b815260040180806020018281038252602c81526020018061202b602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061079e82610ad2565b9050806001600160a01b0316836001600160a01b031614156107f15760405162461bcd60e51b81526004018080602001828103825260218152602001806120db6021913960400191505060405180910390fd5b806001600160a01b0316610803611213565b6001600160a01b0316148061082457506108248161081f611213565b611070565b61085f5760405162461bcd60e51b8152600401808060200182810382526038815260200180611f7e6038913960400191505060405180910390fd5b6108698383611217565b505050565b600061087a6002611285565b905090565b606061088a82611206565b6108c9576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600b602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b820191906000526020600020905b81548152906001019060200180831161094157829003601f168201915b5093979650505050505050565b61097c610976611213565b82611290565b6109b75760405162461bcd60e51b81526004018080602001828103825260318152602001806120fc6031913960400191505060405180910390fd5b610869838383611334565b6001600160a01b03821660009081526001602052604081206109e49083611480565b90505b92915050565b60606109f882611206565b610a37576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600d602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b61086983838360405180602001604052806000815250610d6b565b600080610aca60028461148c565b509392505050565b60006109e782604051806060016040528060298152602001611fe060299139600291906114a8565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b60006001600160a01b038216610ba25760405162461bcd60e51b815260040180806020018281038252602a815260200180611fb6602a913960400191505060405180910390fd5b6001600160a01b03821660009081526001602052604090206109e790611285565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107275780601f106106fc57610100808354040283529160200191610727565b6000610c30600a6114b5565b6000610c3c600a6114be565b9050610c4884826114c2565b610c5285826114e1565b610c5c818461160f565b90505b9392505050565b610c6e611213565b6001600160a01b0316826001600160a01b03161415610cd4576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610ce1611213565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610d25611213565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610d7c610d76611213565b83611290565b610db75760405162461bcd60e51b81526004018080602001828103825260318152602001806120fc6031913960400191505060405180910390fd5b610dc384848484611672565b50505050565b6060610dd482611206565b610e0f5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120ac602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f6002600019610100600186161502019093169290920491820184900484028101840190945280845260609392830182828015610ea45780601f10610e7957610100808354040283529160200191610ea4565b820191906000526020600020905b815481529060010190602001808311610e8757829003601f168201915b505060095493945050505060026000196101006001841615020190911604610ecd579050610696565b805115610f9e576009816040516020018083805460018160011615610100020316600290048015610f355780601f10610f13576101008083540402835291820191610f35565b820191906000526020600020905b815481529060010190602001808311610f21575b5050825160208401908083835b60208310610f615780518252601f199092019160209182019101610f42565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050610696565b6009610fa9846116c4565b60405160200180838054600181600116156101000203166002900480156110075780601f10610fe5576101008083540402835291820191611007565b820191906000526020600020905b815481529060010190602001808311610ff3575b5050825160208401908083835b602083106110335780518252601f199092019160209182019101611014565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60606110a982611206565b6110e8576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600c602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b606061115d82611206565b61119c576040805162461bcd60e51b81526020600482018190526024820152600080516020611f5e833981519152604482015290519081900360640190fd5b6000828152600e602090815260409182902080548351601f600260001961010060018616150201909316929092049182018490048402810184019094528084526060939283018282801561095e5780601f106109335761010080835404028352916020019161095e565b60006109e760028361179f565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061124c82610ad2565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006109e7826114be565b600061129b82611206565b6112d65760405162461bcd60e51b815260040180806020018281038252602c815260200180611f32602c913960400191505060405180910390fd5b60006112e183610ad2565b9050806001600160a01b0316846001600160a01b0316148061131c5750836001600160a01b031661131184610731565b6001600160a01b0316145b8061132c575061132c8185611070565b949350505050565b826001600160a01b031661134782610ad2565b6001600160a01b03161461138c5760405162461bcd60e51b81526004018080602001828103825260298152602001806120836029913960400191505060405180910390fd5b6001600160a01b0382166113d15760405162461bcd60e51b8152600401808060200182810382526024815260200180611f0e6024913960400191505060405180910390fd5b6113dc838383610869565b6113e7600082611217565b6001600160a01b038316600090815260016020526040902061140990826117ab565b506001600160a01b038216600090815260016020526040902061142c90826117b7565b50611439600282846117c3565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006109e483836117d9565b600080808061149b868661183d565b9097909650945050505050565b6000610c5c8484846118b8565b80546001019055565b5490565b6000818152600b60209081526040909120835161086992850190611e26565b6001600160a01b03821661153c576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61154581611206565b15611597576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6115a360008383610869565b6001600160a01b03821660009081526001602052604090206115c590826117b7565b506115d2600282846117c3565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b61161882611206565b6116535760405162461bcd60e51b815260040180806020018281038252602c815260200180612057602c913960400191505060405180910390fd5b6000828152600860209081526040909120825161086992840190611e26565b61167d848484611334565b61168984848484611982565b610dc35760405162461bcd60e51b8152600401808060200182810382526032815260200180611edc6032913960400191505060405180910390fd5b6060816116e957506040805180820190915260018152600360fc1b6020820152610696565b8160005b811561170157600101600a820491506116ed565b60608167ffffffffffffffff8111801561171a57600080fd5b506040519080825280601f01601f191660200182016040528015611745576020820181803683370190505b50859350905060001982015b831561179657600a840660300160f81b8282806001900393508151811061177457fe5b60200101906001600160f81b031916908160001a905350600a84049350611751565b50949350505050565b60006109e48383611aea565b60006109e48383611b02565b60006109e48383611bc8565b6000610c5c84846001600160a01b038516611c12565b8154600090821061181b5760405162461bcd60e51b8152600401808060200182810382526022815260200180611eba6022913960400191505060405180910390fd5b82600001828154811061182a57fe5b9060005260206000200154905092915050565b8154600090819083106118815760405162461bcd60e51b81526004018080602001828103825260228152602001806120096022913960400191505060405180910390fd5b600084600001848154811061189257fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816119535760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611918578181015183820152602001611900565b50505050905090810190601f1680156119455780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5084600001600182038154811061196657fe5b9060005260206000209060020201600101549150509392505050565b6000611996846001600160a01b0316611ca9565b6119a25750600161132c565b6060611ab0630a85bd0160e11b6119b7611213565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611a1e578181015183820152602001611a06565b50505050905090810190601f168015611a4b5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001611edc603291396001600160a01b0388169190611caf565b90506000818060200190516020811015611ac957600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611bbe5783546000198083019190810190600090879083908110611b3557fe5b9060005260206000200154905080876000018481548110611b5257fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611b8257fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506109e7565b60009150506109e7565b6000611bd48383611aea565b611c0a575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556109e7565b5060006109e7565b600082815260018401602052604081205480611c77575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610c5f565b82856000016001830381548110611c8a57fe5b9060005260206000209060020201600101819055506000915050610c5f565b3b151590565b6060610c5c84846000856060611cc485611ca9565b611d15576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611d545780518252601f199092019160209182019101611d35565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611db6576040519150601f19603f3d011682016040523d82523d6000602084013e611dbb565b606091505b50915091508115611dcf57915061132c9050565b805115611ddf5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611918578181015183820152602001611900565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611e6757805160ff1916838001178555611e94565b82800160010185558215611e94579182015b82811115611e94578251825591602001919060010190611e79565b50611ea0929150611ea4565b5090565b5b80821115611ea05760008155600101611ea556fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4469676974616c204944206e756d62657220646f6573206e6f742065787369744552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220ee07475bfbb2766a12f1c781992dc40e5cccb60bb6e55dacfaf5e6b25754dde364736f6c634300060c0033",
  "immutableReferences": {},
  "sourceMap": "195:2516:0:-:0;;;547:50;;;;;;;;;-1:-1:-1;3567:365:6;;;;;;;;;;;-1:-1:-1;;;3567:365:6;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;3567:365:6;;;;;751:40:3;-1:-1:-1;;;751:18:3;:40::i;:::-;3639:12:6;;;;:5;;:12;;;;;:::i;:::-;-1:-1:-1;3661:16:6;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;3765:40:6;-1:-1:-1;;;3765:18:6;:40::i;:::-;3815:49;-1:-1:-1;;;3815:18:6;:49::i;:::-;3874:51;-1:-1:-1;;;3874:18:6;:51::i;:::-;3567:365;;195:2516:0;;1482:198:3;-1:-1:-1;;;;;;1565:25:3;;;;;1557:66;;;;;-1:-1:-1;;;1557:66:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;1633:33:3;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1633:40:3;1669:4;1633:40;;;1482:198::o;195:2516:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;195:2516:0;;;-1:-1:-1;195:2516:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "195:2516:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:140:3;;;;;;;;;;;;;;;;-1:-1:-1;948:140:3;-1:-1:-1;;;;;;948:140:3;;:::i;:::-;;;;;;;;;;;;;;;;;;4488:90:6;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7095:209;;;;;;;;;;;;;;;;-1:-1:-1;7095:209:6;;:::i;:::-;;;;-1:-1:-1;;;;;7095:209:6;;;;;;;;;;;;;;6653:381;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;6653:381:6;;;;;;;;:::i;:::-;;6163:200;;;:::i;:::-;;;;;;;;;;;;;;;;1200:253:0;;;;;;;;;;;;;;;;-1:-1:-1;1200:253:0;;:::i;7943:300:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;7943:300:6;;;;;;;;;;;;;;;;;:::i;5940:152::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;5940:152:6;;;;;;;;:::i;2037:249:0:-;;;;;;;;;;;;;;;;-1:-1:-1;2037:249:0;;:::i;8309:149:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;8309:149:6;;;;;;;;;;;;;;;;;:::i;6435:161::-;;;;;;;;;;;;;;;;-1:-1:-1;6435:161:6;;:::i;4259:167::-;;;;;;;;;;;;;;;;-1:-1:-1;4259:167:6;;:::i;5774:87::-;;;:::i;3991:211::-;;;;;;;;;;;;;;;;-1:-1:-1;3991:211:6;-1:-1:-1;;;;;3991:211:6;;:::i;4642:94::-;;;:::i;603:455:0:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;603:455:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;603:455:0;;;;;;;;-1:-1:-1;603:455:0;;-1:-1:-1;;603:455:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;603:455:0;;-1:-1:-1;603:455:0;;-1:-1:-1;;;;;603:455:0:i;7371:290:6:-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;7371:290:6;;;;;;;;;;:::i;8524:282::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;8524:282:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;8524:282:6;;-1:-1:-1;8524:282:6;;-1:-1:-1;;;;;8524:282:6:i;4802:740::-;;;;;;;;;;;;;;;;-1:-1:-1;4802:740:6;;:::i;7727:154::-;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;7727:154:6;;;;;;;;;;:::i;1624:266:0:-;;;;;;;;;;;;;;;;-1:-1:-1;1624:266:0;;:::i;2448:261::-;;;;;;;;;;;;;;;;-1:-1:-1;2448:261:0;;:::i;948:140:3:-;-1:-1:-1;;;;;;1048:33:3;;1025:4;1048:33;;;;;;;;;;;;;948:140;;;;:::o;4488:90:6:-;4566:5;4559:12;;;;;;;;-1:-1:-1;;4559:12:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4534:13;;4559:12;;4566:5;;4559:12;;4566:5;4559:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4488:90;:::o;7095:209::-;7163:7;7190:16;7198:7;7190;:16::i;:::-;7182:73;;;;-1:-1:-1;;;7182:73:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7273:24:6;;;;:15;:24;;;;;;-1:-1:-1;;;;;7273:24:6;;7095:209::o;6653:381::-;6733:13;6749:16;6757:7;6749;:16::i;:::-;6733:32;;6789:5;-1:-1:-1;;;;;6783:11:6;:2;-1:-1:-1;;;;;6783:11:6;;;6775:57;;;;-1:-1:-1;;;6775:57:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6867:5;-1:-1:-1;;;;;6851:21:6;:12;:10;:12::i;:::-;-1:-1:-1;;;;;6851:21:6;;:62;;;;6876:37;6893:5;6900:12;:10;:12::i;:::-;6876:16;:37::i;:::-;6843:152;;;;-1:-1:-1;;;6843:152:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7006:21;7015:2;7019:7;7006:8;:21::i;:::-;6653:381;;;:::o;6163:200::-;6216:7;6335:21;:12;:19;:21::i;:::-;6328:28;;6163:200;:::o;1200:253:0:-;1264:13;1297:17;1305:8;1297:7;:17::i;:::-;1289:62;;;;;-1:-1:-1;;;1289:62:0;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1289:62:0;;;;;;;;;;;;;;;1392:24;;;;:14;:24;;;;;;;;;1362:54;;;;;;-1:-1:-1;;1362:54:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:27;;:54;;;1392:24;1362:54;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1362:54:0;;1200:253;-1:-1:-1;;;;;;;1200:253:0:o;7943:300:6:-;8102:41;8121:12;:10;:12::i;:::-;8135:7;8102:18;:41::i;:::-;8094:103;;;;-1:-1:-1;;;8094:103:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8208:28;8218:4;8224:2;8228:7;8208:9;:28::i;5940:152::-;-1:-1:-1;;;;;6055:20:6;;6029:7;6055:20;;;:13;:20;;;;;:30;;6079:5;6055:23;:30::i;:::-;6048:37;;5940:152;;;;;:::o;2037:249:0:-;2100:13;2133:17;2141:8;2133:7;:17::i;:::-;2125:62;;;;;-1:-1:-1;;;2125:62:0;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;2125:62:0;;;;;;;;;;;;;;;2227:23;;;;:13;:23;;;;;;;;;2198:52;;;;;;-1:-1:-1;;2198:52:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:26;;:52;;;2227:23;2198:52;;;;;;;;;;;;;;;;;;;;;;;;8309:149:6;8412:39;8429:4;8435:2;8439:7;8412:39;;;;;;;;;;;;:16;:39::i;6435:161::-;6502:7;;6543:22;:12;6559:5;6543:15;:22::i;:::-;-1:-1:-1;6521:44:6;6435:161;-1:-1:-1;;;6435:161:6:o;4259:167::-;4323:7;4349:70;4366:7;4349:70;;;;;;;;;;;;;;;;;:12;;:70;:16;:70::i;5774:87::-;5846:8;5839:15;;;;;;;;-1:-1:-1;;5839:15:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5814:13;;5839:15;;5846:8;;5839:15;;5846:8;5839:15;;;;;;;;;;;;;;;;;;;;;;;;3991:211;4055:7;-1:-1:-1;;;;;4082:19:6;;4074:74;;;;-1:-1:-1;;;4074:74:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4166:20:6;;;;;;:13;:20;;;;;:29;;:27;:29::i;4642:94::-;4722:7;4715:14;;;;;;;;-1:-1:-1;;4715:14:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4690:13;;4715:14;;4722:7;;4715:14;;4722:7;4715:14;;;;;;;;;;;;;;;;;;;;;;;;603:455:0;728:7;751:21;:9;:19;:21::i;:::-;783:30;816:19;:9;:17;:19::i;:::-;783:52;;845:54;862:12;876:22;845:16;:54::i;:::-;910:45;916:14;932:22;910:5;:45::i;:::-;965:46;978:22;1002:8;965:12;:46::i;:::-;1029:22;-1:-1:-1;603:455:0;;;;;;:::o;7371:290:6:-;7485:12;:10;:12::i;:::-;-1:-1:-1;;;;;7473:24:6;:8;-1:-1:-1;;;;;7473:24:6;;;7465:62;;;;;-1:-1:-1;;;7465:62:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;7583:8;7538:18;:32;7557:12;:10;:12::i;:::-;-1:-1:-1;;;;;7538:32:6;;;;;;;;;;;;;;;;;-1:-1:-1;7538:32:6;;;:42;;;;;;;;;;;;:53;;-1:-1:-1;;7538:53:6;;;;;;;;;;;7621:12;:10;:12::i;:::-;-1:-1:-1;;;;;7606:48:6;;7645:8;7606:48;;;;;;;;;;;;;;;;;;;;7371:290;;:::o;8524:282::-;8655:41;8674:12;:10;:12::i;:::-;8688:7;8655:18;:41::i;:::-;8647:103;;;;-1:-1:-1;;;8647:103:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8760:39;8774:4;8780:2;8784:7;8793:5;8760:13;:39::i;:::-;8524:282;;;;:::o;4802:740::-;4867:13;4900:16;4908:7;4900;:16::i;:::-;4892:76;;;;-1:-1:-1;;;4892:76:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5005:19;;;;:10;:19;;;;;;;;;4979:45;;;;;;-1:-1:-1;;4979:45:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:23;;:45;;;5005:19;4979:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5103:8:6;5097:22;4979:45;;-1:-1:-1;;;;5097:22:6;-1:-1:-1;;5097:22:6;;;;;;;;;;;5093:74;;5147:9;-1:-1:-1;5140:16:6;;5093:74;5269:23;;:27;5265:110;;5343:8;5353:9;5326:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5326:37:6;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5326:37:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5312:52;;;;;5265:110;5505:8;5515:18;:7;:16;:18::i;:::-;5488:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5488:46:6;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5488:46:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5474:61;;;4802:740;;;:::o;7727:154::-;-1:-1:-1;;;;;7839:25:6;;;7816:4;7839:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;7727:154::o;1624:266:0:-;1691:13;1724:17;1732:8;1724:7;:17::i;:::-;1716:62;;;;;-1:-1:-1;;;1716:62:0;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;1716:62:0;;;;;;;;;;;;;;;1822:28;;;;:18;:28;;;;;;;;;1789:61;;;;;;-1:-1:-1;;1789:61:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:30;;:61;;;1822:28;1789:61;;;;;;;;;;;;;;;;;;;;;;;;2448:261;2514:13;2547:17;2555:8;2547:7;:17::i;:::-;2539:62;;;;;-1:-1:-1;;;2539:62:0;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;2539:62:0;;;;;;;;;;;;;;;2644:26;;;;:16;:26;;;;;;;;;2612:58;;;;;;-1:-1:-1;;2612:58:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:29;;:58;;;2644:26;2612:58;;;;;;;;;;;;;;;;;;;;;;;;10240:117:6;10297:4;10320:30;:12;10342:7;10320:21;:30::i;590:104:2:-;677:10;590:104;:::o;15896:155:6:-;15961:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;15961:29:6;-1:-1:-1;;;;;15961:29:6;;;;;;;;:24;;16014:16;15961:24;16014:7;:16::i;:::-;-1:-1:-1;;;;;16005:39:6;;;;;;;;;;;15896:155;;:::o;7023:121:13:-;7092:7;7118:19;7126:3;7118:7;:19::i;10515:329:6:-;10600:4;10624:16;10632:7;10624;:16::i;:::-;10616:73;;;;-1:-1:-1;;;10616:73:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10699:13;10715:16;10723:7;10715;:16::i;:::-;10699:32;;10760:5;-1:-1:-1;;;;;10749:16:6;:7;-1:-1:-1;;;;;10749:16:6;;:51;;;;10793:7;-1:-1:-1;;;;;10769:31:6;:20;10781:7;10769:11;:20::i;:::-;-1:-1:-1;;;;;10769:31:6;;10749:51;:87;;;;10804:32;10821:5;10828:7;10804:16;:32::i;:::-;10741:96;10515:329;-1:-1:-1;;;;10515:329:6:o;13509:559::-;13626:4;-1:-1:-1;;;;;13606:24:6;:16;13614:7;13606;:16::i;:::-;-1:-1:-1;;;;;13606:24:6;;13598:78;;;;-1:-1:-1;;;13598:78:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;13694:16:6;;13686:65;;;;-1:-1:-1;;;13686:65:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13762:39;13783:4;13789:2;13793:7;13762:20;:39::i;:::-;13863:29;13880:1;13884:7;13863:8;:29::i;:::-;-1:-1:-1;;;;;13903:19:6;;;;;;:13;:19;;;;;:35;;13930:7;13903:26;:35::i;:::-;-1:-1:-1;;;;;;13948:17:6;;;;;;:13;:17;;;;;:30;;13970:7;13948:21;:30::i;:::-;-1:-1:-1;13989:29:6;:12;14006:7;14015:2;13989:16;:29::i;:::-;;14053:7;14049:2;-1:-1:-1;;;;;14034:27:6;14043:4;-1:-1:-1;;;;;14034:27:6;;;;;;;;;;;13509:559;;;:::o;7649:135:14:-;7720:7;7754:22;7758:3;7770:5;7754:3;:22::i;7472:224:13:-;7552:7;;;;7611:22;7615:3;7627:5;7611:3;:22::i;:::-;7580:53;;;;-1:-1:-1;7472:224:13;-1:-1:-1;;;;;7472:224:13:o;8115:202::-;8222:7;8264:44;8269:3;8289;8295:12;8264:4;:44::i;1216:178:12:-;1368:19;;1386:1;1368:19;;;1216:178::o;1098:112::-;1189:14;;1098:112::o;1064:130:0:-;1155:24;;;;:14;:24;;;;;;;;:31;;;;;;;;:::i;12073:393:6:-;-1:-1:-1;;;;;12152:16:6;;12144:61;;;;;-1:-1:-1;;;12144:61:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12224:16;12232:7;12224;:16::i;:::-;12223:17;12215:58;;;;;-1:-1:-1;;;12215:58:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;12284:45;12313:1;12317:2;12321:7;12284:20;:45::i;:::-;-1:-1:-1;;;;;12340:17:6;;;;;;:13;:17;;;;;:30;;12362:7;12340:21;:30::i;:::-;-1:-1:-1;12381:29:6;:12;12398:7;12407:2;12381:16;:29::i;:::-;-1:-1:-1;12426:33:6;;12451:7;;-1:-1:-1;;;;;12426:33:6;;;12443:1;;12426:33;;12443:1;;12426:33;12073:393;;:::o;14215:212::-;14314:16;14322:7;14314;:16::i;:::-;14306:73;;;;-1:-1:-1;;;14306:73:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14389:19;;;;:10;:19;;;;;;;;:31;;;;;;;;:::i;9668:269::-;9781:28;9791:4;9797:2;9801:7;9781:9;:28::i;:::-;9827:48;9850:4;9856:2;9860:7;9869:5;9827:22;:48::i;:::-;9819:111;;;;-1:-1:-1;;;9819:111:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;202:723:15;258:13;475:10;471:51;;-1:-1:-1;501:10:15;;;;;;;;;;;;-1:-1:-1;;;501:10:15;;;;;;471:51;546:5;531:12;585:75;592:9;;585:75;;617:8;;647:2;639:10;;;;585:75;;;669:19;701:6;691:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;691:17:15;-1:-1:-1;761:5:15;;-1:-1:-1;669:39:15;-1:-1:-1;;;734:10:15;;776:112;783:9;;776:112;;849:2;842:4;:9;837:2;:14;826:27;;808:6;815:7;;;;;;;808:15;;;;;;;;;;;:45;-1:-1:-1;;;;;808:45:15;;;;;;;;-1:-1:-1;875:2:15;867:10;;;;776:112;;;-1:-1:-1;911:6:15;202:723;-1:-1:-1;;;;202:723:15:o;6791:149:13:-;6875:4;6898:35;6908:3;6928;6898:9;:35::i;6764:135:14:-;6834:4;6857:35;6865:3;6885:5;6857:7;:35::i;6467:129::-;6534:4;6557:32;6562:3;6582:5;6557:4;:32::i;6239:174:13:-;6328:4;6351:55;6356:3;6376;-1:-1:-1;;;;;6390:14:13;;6351:4;:55::i;4423:201:14:-;4517:18;;4490:7;;4517:26;-1:-1:-1;4509:73:14;;;;-1:-1:-1;;;4509:73:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4599:3;:11;;4611:5;4599:18;;;;;;;;;;;;;;;;4592:25;;4423:201;;;;:::o;4934:274:13:-;5037:19;;5001:7;;;;5037:27;-1:-1:-1;5029:74:13;;;;-1:-1:-1;;;5029:74:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5114:22;5139:3;:12;;5152:5;5139:19;;;;;;;;;;;;;;;;;;5114:44;;5176:5;:10;;;5188:5;:12;;;5168:33;;;;;4934:274;;;;;:::o;5615:315::-;5709:7;5747:17;;;:12;;;:17;;;;;;5797:12;5782:13;5774:36;;;;-1:-1:-1;;;5774:36:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5863:3;:12;;5887:1;5876:8;:12;5863:26;;;;;;;;;;;;;;;;;;:33;;;5856:40;;;5615:315;;;;;:::o;15301:589:6:-;15421:4;15446:15;:2;-1:-1:-1;;;;;15446:13:6;;:15::i;:::-;15441:58;;-1:-1:-1;15484:4:6;15477:11;;15441:58;15508:23;15534:246;-1:-1:-1;;;15645:12:6;:10;:12::i;:::-;15671:4;15689:7;15710:5;15550:175;;;;;;-1:-1:-1;;;;;15550:175:6;;;;;;-1:-1:-1;;;;;15550:175:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;15550:175:6;;;;;;;-1:-1:-1;;;;;15550:175:6;;;;;;;;;;;15534:246;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;15534:15:6;;;:246;:15;:246::i;:::-;15508:272;;15790:13;15817:10;15806:32;;;;;;;;;;;;;;;-1:-1:-1;15806:32:6;-1:-1:-1;;;;;;15856:26:6;-1:-1:-1;;;15856:26:6;;-1:-1:-1;;;15301:589:6;;;;;;:::o;4270:123:13:-;4341:4;4364:17;;;:12;;;;;:17;;;;;;:22;;;4270:123::o;2183:1512:14:-;2249:4;2386:19;;;:12;;;:19;;;;;;2420:15;;2416:1273;;2849:18;;-1:-1:-1;;2801:14:14;;;;2849:22;;;;2777:21;;2849:3;;:22;;3131;;;;;;;;;;;;;;3111:42;;3274:9;3245:3;:11;;3257:13;3245:26;;;;;;;;;;;;;;;;;;;:38;;;;3349:23;;;3391:1;3349:12;;;:23;;;;;;3375:17;;;3349:43;;3498:17;;3349:3;;3498:17;;;;;;;;;;;;;;;;;;;;;;3590:3;:12;;:19;3603:5;3590:19;;;;;;;;;;;3583:26;;;3631:4;3624:11;;;;;;;;2416:1273;3673:5;3666:12;;;;;1611:404;1674:4;1695:21;1705:3;1710:5;1695:9;:21::i;:::-;1690:319;;-1:-1:-1;1732:23:14;;;;;;;;:11;:23;;;;;;;;;;;;;1912:18;;1890:19;;;:12;;;:19;;;;;;:40;;;;1944:11;;1690:319;-1:-1:-1;1993:5:14;1986:12;;1828:678:13;1904:4;2037:17;;;:12;;;:17;;;;;;2069:13;2065:435;;-1:-1:-1;;2153:38:13;;;;;;;;;;;;;;;;;;2135:57;;;;;;;;:12;:57;;;;;;;;;;;;;;;;;;;;;;;;2347:19;;2327:17;;;:12;;;:17;;;;;;;:39;2380:11;;2065:435;2458:5;2422:3;:12;;2446:1;2435:8;:12;2422:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2484:5;2477:12;;;;;718:413:11;1078:20;1116:8;;;718:413::o;3573:194::-;3676:12;3707:53;3730:6;3738:4;3744:1;3747:12;5050;5082:18;5093:6;5082:10;:18::i;:::-;5074:60;;;;;-1:-1:-1;;;5074:60:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;5205:12;5219:23;5246:6;-1:-1:-1;;;;;5246:11:11;5266:8;5277:4;5246:36;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5246:36:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5204:78;;;;5296:7;5292:580;;;5326:10;-1:-1:-1;5319:17:11;;-1:-1:-1;5319:17:11;5292:580;5437:17;;:21;5433:429;;5695:10;5689:17;5755:15;5742:10;5738:2;5734:19;5727:44;5644:145;5827:20;;-1:-1:-1;;;5827:20:11;;;;;;;;;;;;;;;;;5834:12;;5827:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;",
  "source": "// contracts/GameItem.sol\n// SPDX-License-Identifier: MIT\npragma solidity ^0.6.0;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\ncontract DigitalIdIssuer is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _idNumber;\n    mapping (uint256 => string) private _verifiedNames;\n    mapping (uint256 => string) private _verifiedAddresses;\n    mapping (uint256 => string) private _verifiedSsns;\n    mapping (uint256 => string) private _verifiedIncomes;\n\n    constructor() public ERC721(\"Digital ID\", \"ID\") {}\n\n    function issueId(address verifiedPerson, string memory verifiedName, string memory tokenURI)\n        public\n        returns (uint256)\n    {\n        _idNumber.increment();\n\n        uint256 verifiedPersonIdNumber = _idNumber.current();\n        _setVerifiedName(verifiedName, verifiedPersonIdNumber);\n\n        _mint(verifiedPerson, verifiedPersonIdNumber);\n        _setTokenURI(verifiedPersonIdNumber, tokenURI);\n\n        return verifiedPersonIdNumber;\n    }\n\n    function _setVerifiedName(string memory name, uint256 idNumber)\n        internal {\n        _verifiedNames[idNumber] = name; \n    }\n\n    function getVerifiedName(uint256 idNumber) public view returns (string memory) {\n        require(_exists(idNumber), \"Digital ID number does not exsit\");\n\n        string memory _verifiedName = _verifiedNames[idNumber];\n        return _verifiedName;\n    }\n\n    //Address\n     function _setVerifiedAddress(string memory address1, uint256 idNumber)\n        internal {\n        _verifiedAddresses[idNumber] = address1; \n    }\n    function getVerifiedAddress(uint256 idNumber) public view returns (string memory) {\n        require(_exists(idNumber), \"Digital ID number does not exsit\");\n\n        string memory _verifiedAddress = _verifiedAddresses[idNumber];\n        return _verifiedAddress;\n    }\n    //SSN\n     function _setVerifiedSsn(string memory ssn, uint256 idNumber)\n        internal {\n        _verifiedSsns[idNumber] = ssn; \n    }\n    function getVerifiedSsn(uint256 idNumber) public view returns (string memory) {\n        require(_exists(idNumber), \"Digital ID number does not exsit\");\n\n        string memory _verifiedSsn = _verifiedSsns[idNumber];\n        return _verifiedSsn;\n    }\n    //Income\n     function _setVerifiedIncome(string memory income, uint256 idNumber)\n        internal {\n        _verifiedIncomes[idNumber] = income; \n    }\n    function getVerifiedIncome(uint256 idNumber) public view returns (string memory) {\n        require(_exists(idNumber), \"Digital ID number does not exsit\");\n\n        string memory _verifiedIncome = _verifiedIncomes[idNumber];\n        return _verifiedIncome;\n    }\n}",
  "sourcePath": "/home/phil/hackathon/erc721-digital-id/contracts/DigitalIdIssuer.sol",
  "ast": {
    "absolutePath": "/home/phil/hackathon/erc721-digital-id/contracts/DigitalIdIssuer.sol",
    "exportedSymbols": {
      "DigitalIdIssuer": [
        223
      ]
    },
    "id": 224,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "58:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 224,
        "sourceUnit": 1500,
        "src": "83:57:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 224,
        "sourceUnit": 1937,
        "src": "141:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1499,
              "src": "223:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1499",
                "typeString": "contract ERC721"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "223:6:0"
          }
        ],
        "contractDependencies": [
          303,
          360,
          372,
          1499,
          1615,
          1646,
          1673
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 223,
        "linearizedBaseContracts": [
          223,
          1499,
          1646,
          1673,
          1615,
          360,
          372,
          303
        ],
        "name": "DigitalIdIssuer",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 8,
            "libraryName": {
              "contractScope": null,
              "id": 6,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1936,
              "src": "242:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$1936",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "236:36:0",
            "typeName": {
              "contractScope": null,
              "id": 7,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1896,
              "src": "255:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1896_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 10,
            "mutability": "mutable",
            "name": "_idNumber",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "277:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1896_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 9,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1896,
              "src": "277:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1896_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 14,
            "mutability": "mutable",
            "name": "_verifiedNames",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "317:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 13,
              "keyType": {
                "id": 11,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "326:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "317:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 12,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "337:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 18,
            "mutability": "mutable",
            "name": "_verifiedAddresses",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "373:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "382:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "373:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 16,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "393:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 22,
            "mutability": "mutable",
            "name": "_verifiedSsns",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "433:49:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 21,
              "keyType": {
                "id": 19,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "442:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "433:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 20,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "453:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 26,
            "mutability": "mutable",
            "name": "_verifiedIncomes",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "488:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 25,
              "keyType": {
                "id": 23,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "497:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "488:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 24,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "508:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 33,
              "nodeType": "Block",
              "src": "595:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 34,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4469676974616c204944",
                    "id": 29,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "575:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2519c61824949ca611ba825790c41570a6a3dc385a671d7c51877e3b0d9a2d44",
                      "typeString": "literal_string \"Digital ID\""
                    },
                    "value": "Digital ID"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4944",
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "589:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_0783b66b75b3ec46e8e9e7694059adf60d701de8fbaa12f566a6b52c64f77f90",
                      "typeString": "literal_string \"ID\""
                    },
                    "value": "ID"
                  }
                ],
                "id": 31,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 28,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1499,
                  "src": "568:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1499_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "568:26:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "558:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "595:0:0"
            },
            "scope": 223,
            "src": "547:50:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "741:317:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "_idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "751:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1896_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1919,
                      "src": "751:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1896_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1896_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "751:21:0"
                },
                {
                  "assignments": [
                    51
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51,
                      "mutability": "mutable",
                      "name": "verifiedPersonIdNumber",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 73,
                      "src": "783:30:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "783:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 55,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "_idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "816:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1896_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1907,
                      "src": "816:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1896_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1896_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "816:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "783:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 57,
                        "name": "verifiedName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "862:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 58,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "876:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56,
                      "name": "_setVerifiedName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "845:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "845:54:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "845:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "verifiedPerson",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36,
                        "src": "916:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "932:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 61,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1235,
                      "src": "910:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "910:45:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "910:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 67,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "978:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "1002:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 66,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1396,
                      "src": "965:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "965:46:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "965:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 71,
                    "name": "verifiedPersonIdNumber",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 51,
                    "src": "1029:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 44,
                  "id": 72,
                  "nodeType": "Return",
                  "src": "1022:29:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "992d0eb7",
            "id": 74,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueId",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "mutability": "mutable",
                  "name": "verifiedPerson",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "620:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "mutability": "mutable",
                  "name": "verifiedName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "644:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "mutability": "mutable",
                  "name": "tokenURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "672:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "672:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "619:76:0"
            },
            "returnParameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "728:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "727:9:0"
            },
            "scope": 223,
            "src": "603:455:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1145:49:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "_verifiedNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1155:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 83,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "1170:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1155:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "1182:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1155:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 86,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedName",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "mutability": "mutable",
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 88,
                  "src": "1090:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1090:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 88,
                  "src": "1110:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1089:38:0"
            },
            "returnParameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:0"
            },
            "scope": 223,
            "src": "1064:130:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 110,
              "nodeType": "Block",
              "src": "1279:174:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 90,
                            "src": "1305:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 96,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "1297:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1297:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1316:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1289:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1289:62:0"
                },
                {
                  "assignments": [
                    103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 103,
                      "mutability": "mutable",
                      "name": "_verifiedName",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 110,
                      "src": "1362:27:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 102,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1362:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 104,
                      "name": "_verifiedNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1392:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 106,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 105,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1407:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1392:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1362:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 108,
                    "name": "_verifiedName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 103,
                    "src": "1433:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 109,
                  "nodeType": "Return",
                  "src": "1426:20:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1dcc516b",
            "id": 111,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedName",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 111,
                  "src": "1225:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1225:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1224:18:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 111,
                  "src": "1264:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 92,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1263:15:0"
            },
            "scope": 223,
            "src": "1200:253:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 124,
              "nodeType": "Block",
              "src": "1562:57:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_verifiedAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1572:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 120,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1591:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1572:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 121,
                      "name": "address1",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1603:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1572:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1572:39:0"
                }
              ]
            },
            "documentation": null,
            "id": 125,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 113,
                  "mutability": "mutable",
                  "name": "address1",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 125,
                  "src": "1503:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1503:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 115,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 125,
                  "src": "1527:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1527:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1502:42:0"
            },
            "returnParameters": {
              "id": 117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1562:0:0"
            },
            "scope": 223,
            "src": "1474:145:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "1706:184:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 127,
                            "src": "1732:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 133,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "1724:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1724:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1743:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1716:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1716:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 138,
                  "nodeType": "ExpressionStatement",
                  "src": "1716:62:0"
                },
                {
                  "assignments": [
                    140
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 140,
                      "mutability": "mutable",
                      "name": "_verifiedAddress",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 147,
                      "src": "1789:30:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 139,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1789:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 144,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_verifiedAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "1822:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 143,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 142,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 127,
                      "src": "1841:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1822:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1789:61:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 145,
                    "name": "_verifiedAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 140,
                    "src": "1867:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 131,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "1860:23:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f0a75f1f",
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 127,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 148,
                  "src": "1652:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1652:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1651:18:0"
            },
            "returnParameters": {
              "id": 131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 130,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 148,
                  "src": "1691:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 129,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1691:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1690:15:0"
            },
            "scope": 223,
            "src": "1624:266:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "1985:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 155,
                        "name": "_verifiedSsns",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "1995:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 157,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 156,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "2009:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1995:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 158,
                      "name": "ssn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "2021:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1995:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "1995:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedSsn",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 150,
                  "mutability": "mutable",
                  "name": "ssn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 162,
                  "src": "1931:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1931:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 152,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 162,
                  "src": "1950:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 151,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1950:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1930:37:0"
            },
            "returnParameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1985:0:0"
            },
            "scope": 223,
            "src": "1906:126:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 184,
              "nodeType": "Block",
              "src": "2115:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 171,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 164,
                            "src": "2141:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 170,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "2133:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2133:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2152:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2125:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2125:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "2125:62:0"
                },
                {
                  "assignments": [
                    177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 177,
                      "mutability": "mutable",
                      "name": "_verifiedSsn",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 184,
                      "src": "2198:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 176,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2198:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 181,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 178,
                      "name": "_verifiedSsns",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "2227:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 180,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "2241:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2227:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2198:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 182,
                    "name": "_verifiedSsn",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 177,
                    "src": "2267:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 168,
                  "id": 183,
                  "nodeType": "Return",
                  "src": "2260:19:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3fa44d0c",
            "id": 185,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedSsn",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 185,
                  "src": "2061:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2061:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2060:18:0"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 167,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 185,
                  "src": "2100:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2100:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2099:15:0"
            },
            "scope": 223,
            "src": "2037:249:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 198,
              "nodeType": "Block",
              "src": "2390:53:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "_verifiedIncomes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "2400:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 194,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 193,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 189,
                        "src": "2417:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2400:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "income",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "2429:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2400:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 197,
                  "nodeType": "ExpressionStatement",
                  "src": "2400:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 199,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedIncome",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 187,
                  "mutability": "mutable",
                  "name": "income",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 199,
                  "src": "2333:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 186,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2333:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 189,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 199,
                  "src": "2355:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2355:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2332:40:0"
            },
            "returnParameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2390:0:0"
            },
            "scope": 223,
            "src": "2305:138:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 221,
              "nodeType": "Block",
              "src": "2529:180:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "2555:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 207,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "2547:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2547:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2566:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 206,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2539:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2539:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 212,
                  "nodeType": "ExpressionStatement",
                  "src": "2539:62:0"
                },
                {
                  "assignments": [
                    214
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 214,
                      "mutability": "mutable",
                      "name": "_verifiedIncome",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 221,
                      "src": "2612:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 213,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2612:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 218,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 215,
                      "name": "_verifiedIncomes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "2644:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 217,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 201,
                      "src": "2661:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2644:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2612:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 219,
                    "name": "_verifiedIncome",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 214,
                    "src": "2687:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 205,
                  "id": 220,
                  "nodeType": "Return",
                  "src": "2680:22:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f95c3600",
            "id": 222,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedIncome",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 201,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 222,
                  "src": "2475:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 200,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:18:0"
            },
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 222,
                  "src": "2514:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2513:15:0"
            },
            "scope": 223,
            "src": "2448:261:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 224,
        "src": "195:2516:0"
      }
    ],
    "src": "58:2653:0"
  },
  "legacyAST": {
    "absolutePath": "/home/phil/hackathon/erc721-digital-id/contracts/DigitalIdIssuer.sol",
    "exportedSymbols": {
      "DigitalIdIssuer": [
        223
      ]
    },
    "id": 224,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "58:23:0"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 224,
        "sourceUnit": 1500,
        "src": "83:57:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 224,
        "sourceUnit": 1937,
        "src": "141:52:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 4,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1499,
              "src": "223:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$1499",
                "typeString": "contract ERC721"
              }
            },
            "id": 5,
            "nodeType": "InheritanceSpecifier",
            "src": "223:6:0"
          }
        ],
        "contractDependencies": [
          303,
          360,
          372,
          1499,
          1615,
          1646,
          1673
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 223,
        "linearizedBaseContracts": [
          223,
          1499,
          1646,
          1673,
          1615,
          360,
          372,
          303
        ],
        "name": "DigitalIdIssuer",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 8,
            "libraryName": {
              "contractScope": null,
              "id": 6,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1936,
              "src": "242:8:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$1936",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "236:36:0",
            "typeName": {
              "contractScope": null,
              "id": 7,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1896,
              "src": "255:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1896_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 10,
            "mutability": "mutable",
            "name": "_idNumber",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "277:34:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1896_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 9,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1896,
              "src": "277:16:0",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1896_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 14,
            "mutability": "mutable",
            "name": "_verifiedNames",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "317:50:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 13,
              "keyType": {
                "id": 11,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "326:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "317:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 12,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "337:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 18,
            "mutability": "mutable",
            "name": "_verifiedAddresses",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "373:54:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 17,
              "keyType": {
                "id": 15,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "382:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "373:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 16,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "393:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 22,
            "mutability": "mutable",
            "name": "_verifiedSsns",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "433:49:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 21,
              "keyType": {
                "id": 19,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "442:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "433:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 20,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "453:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 26,
            "mutability": "mutable",
            "name": "_verifiedIncomes",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 223,
            "src": "488:52:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
              "typeString": "mapping(uint256 => string)"
            },
            "typeName": {
              "id": 25,
              "keyType": {
                "id": 23,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "497:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "488:27:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                "typeString": "mapping(uint256 => string)"
              },
              "valueType": {
                "id": 24,
                "name": "string",
                "nodeType": "ElementaryTypeName",
                "src": "508:6:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                }
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 33,
              "nodeType": "Block",
              "src": "595:2:0",
              "statements": []
            },
            "documentation": null,
            "id": 34,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "4469676974616c204944",
                    "id": 29,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "575:12:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_2519c61824949ca611ba825790c41570a6a3dc385a671d7c51877e3b0d9a2d44",
                      "typeString": "literal_string \"Digital ID\""
                    },
                    "value": "Digital ID"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "4944",
                    "id": 30,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "589:4:0",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_0783b66b75b3ec46e8e9e7694059adf60d701de8fbaa12f566a6b52c64f77f90",
                      "typeString": "literal_string \"ID\""
                    },
                    "value": "ID"
                  }
                ],
                "id": 31,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 28,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1499,
                  "src": "568:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$1499_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "568:26:0"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 27,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "558:2:0"
            },
            "returnParameters": {
              "id": 32,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "595:0:0"
            },
            "scope": 223,
            "src": "547:50:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 73,
              "nodeType": "Block",
              "src": "741:317:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 45,
                        "name": "_idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "751:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1896_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 47,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1919,
                      "src": "751:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1896_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1896_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "751:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "751:21:0"
                },
                {
                  "assignments": [
                    51
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 51,
                      "mutability": "mutable",
                      "name": "verifiedPersonIdNumber",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 73,
                      "src": "783:30:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 50,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "783:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 55,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "_idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 10,
                        "src": "816:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1896_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 53,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1907,
                      "src": "816:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1896_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1896_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "816:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "783:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 57,
                        "name": "verifiedName",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 38,
                        "src": "862:12:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 58,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "876:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 56,
                      "name": "_setVerifiedName",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 88,
                      "src": "845:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256)"
                      }
                    },
                    "id": 59,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "845:54:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 60,
                  "nodeType": "ExpressionStatement",
                  "src": "845:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 62,
                        "name": "verifiedPerson",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 36,
                        "src": "916:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 63,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "932:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 61,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1235,
                      "src": "910:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 64,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "910:45:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 65,
                  "nodeType": "ExpressionStatement",
                  "src": "910:45:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 67,
                        "name": "verifiedPersonIdNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 51,
                        "src": "978:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 68,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 40,
                        "src": "1002:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 66,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1396,
                      "src": "965:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "965:46:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "965:46:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 71,
                    "name": "verifiedPersonIdNumber",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 51,
                    "src": "1029:22:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 44,
                  "id": 72,
                  "nodeType": "Return",
                  "src": "1022:29:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "992d0eb7",
            "id": 74,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "issueId",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 41,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 36,
                  "mutability": "mutable",
                  "name": "verifiedPerson",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "620:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 35,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "620:7:0",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 38,
                  "mutability": "mutable",
                  "name": "verifiedName",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "644:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 37,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 40,
                  "mutability": "mutable",
                  "name": "tokenURI",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "672:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 39,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "672:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "619:76:0"
            },
            "returnParameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 43,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 74,
                  "src": "728:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "728:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "727:9:0"
            },
            "scope": 223,
            "src": "603:455:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 87,
              "nodeType": "Block",
              "src": "1145:49:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 85,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 81,
                        "name": "_verifiedNames",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 14,
                        "src": "1155:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 83,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 82,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 78,
                        "src": "1170:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1155:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 84,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 76,
                      "src": "1182:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1155:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 86,
                  "nodeType": "ExpressionStatement",
                  "src": "1155:31:0"
                }
              ]
            },
            "documentation": null,
            "id": 88,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedName",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 79,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 76,
                  "mutability": "mutable",
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 88,
                  "src": "1090:18:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 75,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1090:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 78,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 88,
                  "src": "1110:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 77,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1110:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1089:38:0"
            },
            "returnParameters": {
              "id": 80,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1145:0:0"
            },
            "scope": 223,
            "src": "1064:130:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 110,
              "nodeType": "Block",
              "src": "1279:174:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 97,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 90,
                            "src": "1305:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 96,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "1297:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 98,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1297:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 99,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1316:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 95,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1289:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 100,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1289:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 101,
                  "nodeType": "ExpressionStatement",
                  "src": "1289:62:0"
                },
                {
                  "assignments": [
                    103
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 103,
                      "mutability": "mutable",
                      "name": "_verifiedName",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 110,
                      "src": "1362:27:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 102,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1362:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 107,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 104,
                      "name": "_verifiedNames",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 14,
                      "src": "1392:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 106,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 105,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 90,
                      "src": "1407:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1392:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1362:54:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 108,
                    "name": "_verifiedName",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 103,
                    "src": "1433:13:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 94,
                  "id": 109,
                  "nodeType": "Return",
                  "src": "1426:20:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "1dcc516b",
            "id": 111,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedName",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 91,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 111,
                  "src": "1225:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1225:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1224:18:0"
            },
            "returnParameters": {
              "id": 94,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 93,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 111,
                  "src": "1264:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 92,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1264:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1263:15:0"
            },
            "scope": 223,
            "src": "1200:253:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 124,
              "nodeType": "Block",
              "src": "1562:57:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 122,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 118,
                        "name": "_verifiedAddresses",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 18,
                        "src": "1572:18:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 120,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 119,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 115,
                        "src": "1591:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1572:28:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 121,
                      "name": "address1",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 113,
                      "src": "1603:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1572:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 123,
                  "nodeType": "ExpressionStatement",
                  "src": "1572:39:0"
                }
              ]
            },
            "documentation": null,
            "id": 125,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 116,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 113,
                  "mutability": "mutable",
                  "name": "address1",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 125,
                  "src": "1503:22:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 112,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1503:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 115,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 125,
                  "src": "1527:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 114,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1527:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1502:42:0"
            },
            "returnParameters": {
              "id": 117,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1562:0:0"
            },
            "scope": 223,
            "src": "1474:145:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 147,
              "nodeType": "Block",
              "src": "1706:184:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 134,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 127,
                            "src": "1732:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 133,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "1724:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 135,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1724:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 136,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1743:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 132,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1716:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 137,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1716:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 138,
                  "nodeType": "ExpressionStatement",
                  "src": "1716:62:0"
                },
                {
                  "assignments": [
                    140
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 140,
                      "mutability": "mutable",
                      "name": "_verifiedAddress",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 147,
                      "src": "1789:30:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 139,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1789:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 144,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 141,
                      "name": "_verifiedAddresses",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 18,
                      "src": "1822:18:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 143,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 142,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 127,
                      "src": "1841:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1822:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1789:61:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 145,
                    "name": "_verifiedAddress",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 140,
                    "src": "1867:16:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 131,
                  "id": 146,
                  "nodeType": "Return",
                  "src": "1860:23:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f0a75f1f",
            "id": 148,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedAddress",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 128,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 127,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 148,
                  "src": "1652:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 126,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1652:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1651:18:0"
            },
            "returnParameters": {
              "id": 131,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 130,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 148,
                  "src": "1691:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 129,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1691:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1690:15:0"
            },
            "scope": 223,
            "src": "1624:266:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 161,
              "nodeType": "Block",
              "src": "1985:47:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 159,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 155,
                        "name": "_verifiedSsns",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 22,
                        "src": "1995:13:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 157,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 156,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "2009:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1995:23:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 158,
                      "name": "ssn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 150,
                      "src": "2021:3:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1995:29:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 160,
                  "nodeType": "ExpressionStatement",
                  "src": "1995:29:0"
                }
              ]
            },
            "documentation": null,
            "id": 162,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedSsn",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 153,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 150,
                  "mutability": "mutable",
                  "name": "ssn",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 162,
                  "src": "1931:17:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 149,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1931:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 152,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 162,
                  "src": "1950:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 151,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1950:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1930:37:0"
            },
            "returnParameters": {
              "id": 154,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1985:0:0"
            },
            "scope": 223,
            "src": "1906:126:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 184,
              "nodeType": "Block",
              "src": "2115:171:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 171,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 164,
                            "src": "2141:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 170,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "2133:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 172,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2133:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 173,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2152:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 169,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2125:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2125:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "2125:62:0"
                },
                {
                  "assignments": [
                    177
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 177,
                      "mutability": "mutable",
                      "name": "_verifiedSsn",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 184,
                      "src": "2198:26:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 176,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2198:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 181,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 178,
                      "name": "_verifiedSsns",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 22,
                      "src": "2227:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 180,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 179,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 164,
                      "src": "2241:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2227:23:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2198:52:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 182,
                    "name": "_verifiedSsn",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 177,
                    "src": "2267:12:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 168,
                  "id": 183,
                  "nodeType": "Return",
                  "src": "2260:19:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3fa44d0c",
            "id": 185,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedSsn",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 165,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 164,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 185,
                  "src": "2061:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 163,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2061:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2060:18:0"
            },
            "returnParameters": {
              "id": 168,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 167,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 185,
                  "src": "2100:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 166,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2100:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2099:15:0"
            },
            "scope": 223,
            "src": "2037:249:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 198,
              "nodeType": "Block",
              "src": "2390:53:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 196,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 192,
                        "name": "_verifiedIncomes",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 26,
                        "src": "2400:16:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                          "typeString": "mapping(uint256 => string storage ref)"
                        }
                      },
                      "id": 194,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 193,
                        "name": "idNumber",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 189,
                        "src": "2417:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2400:26:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 195,
                      "name": "income",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 187,
                      "src": "2429:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "2400:35:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 197,
                  "nodeType": "ExpressionStatement",
                  "src": "2400:35:0"
                }
              ]
            },
            "documentation": null,
            "id": 199,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_setVerifiedIncome",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 190,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 187,
                  "mutability": "mutable",
                  "name": "income",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 199,
                  "src": "2333:20:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 186,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2333:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 189,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 199,
                  "src": "2355:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 188,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2355:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2332:40:0"
            },
            "returnParameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2390:0:0"
            },
            "scope": 223,
            "src": "2305:138:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 221,
              "nodeType": "Block",
              "src": "2529:180:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 208,
                            "name": "idNumber",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 201,
                            "src": "2555:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 207,
                          "name": "_exists",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1092,
                          "src": "2547:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_bool_$",
                            "typeString": "function (uint256) view returns (bool)"
                          }
                        },
                        "id": 209,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2547:17:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4469676974616c204944206e756d62657220646f6573206e6f74206578736974",
                        "id": 210,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2566:34:0",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        },
                        "value": "Digital ID number does not exsit"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_5f00a6504381f11abc6b84822c31d8414271974e42cc8523783485c7da2ddfd5",
                          "typeString": "literal_string \"Digital ID number does not exsit\""
                        }
                      ],
                      "id": 206,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2539:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 211,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2539:62:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 212,
                  "nodeType": "ExpressionStatement",
                  "src": "2539:62:0"
                },
                {
                  "assignments": [
                    214
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 214,
                      "mutability": "mutable",
                      "name": "_verifiedIncome",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 221,
                      "src": "2612:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 213,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "2612:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 218,
                  "initialValue": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 215,
                      "name": "_verifiedIncomes",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 26,
                      "src": "2644:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_uint256_$_t_string_storage_$",
                        "typeString": "mapping(uint256 => string storage ref)"
                      }
                    },
                    "id": 217,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 216,
                      "name": "idNumber",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 201,
                      "src": "2661:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2644:26:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2612:58:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 219,
                    "name": "_verifiedIncome",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 214,
                    "src": "2687:15:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 205,
                  "id": 220,
                  "nodeType": "Return",
                  "src": "2680:22:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f95c3600",
            "id": 222,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getVerifiedIncome",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 202,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 201,
                  "mutability": "mutable",
                  "name": "idNumber",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 222,
                  "src": "2475:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 200,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2475:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2474:18:0"
            },
            "returnParameters": {
              "id": 205,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 204,
                  "mutability": "mutable",
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 222,
                  "src": "2514:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 203,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2514:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2513:15:0"
            },
            "scope": 223,
            "src": "2448:261:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 224,
        "src": "195:2516:0"
      }
    ],
    "src": "58:2653:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.12+commit.27d51765.Emscripten.clang"
  },
  "networks": {
    "3": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x067Ba43D9B8050a7d96936Dc8d0fbFB2427C379D",
      "transactionHash": "0x1ae713635c0c4c0c42650809683afe9d60304e61c788d704f69385bdaf2059e5"
    }
  },
  "schemaVersion": "3.2.4",
  "updatedAt": "2020-10-27T23:14:26.544Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}