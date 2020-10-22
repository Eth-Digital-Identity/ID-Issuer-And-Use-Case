## Based off
https://github.com/NoahZinsmeister/web3-react

## TODO
-Make page to apply for credit card/bank account. 
-Read user's address and check if they have a digital ID. 
-Make form to submit details for digital ID. Save details.  
-Make sample call to `GameItem.awardItem("<YOURADDRESS>", "any string");` https://web3js.readthedocs.io/en/v1.3.0/web3-eth-contract.html#deploy
https://ropsten.etherscan.io/address/0x678f19065f9da7364eadc78e843c845d68a07ced#writeContract
Call should give token to <YOURADDRESS> like this https://ropsten.etherscan.io/token/0x678f19065f9da7364eadc78e843c845d68a07ced#readContract
-


## Local Development

Before starting, ensure you've completed the instructions in the top-level [README.md](../README.md#local-development).

- Install dependencies\
  `yarn`

- Ensure that you've [`yarn link`ed](https://classic.yarnpkg.com/en/docs/cli/link/) all `@web3-react/*` packages, as well as `react` and `react-dom`, from `../packages/*` and `../node_modules/{react,react-dom}` respectively. This will ensure that changes you make to individual packages will be reflected immediately in the example (as long as you're running `yarn start` in the root).

- Serve the example on localhost\
  `yarn start`
