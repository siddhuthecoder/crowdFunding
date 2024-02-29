require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
const private_key=process.env.PRIVATE_KEY;
module.exports = {
  
   networks: {
      hardhat: {},
      sepolia: {
        url: 'https://eth-sepolia.g.alchemy.com/v2/XB5meeKTzn4rqhq0KyhkwS11mpP7mki1',
        accounts: ['99f75789eb2d1784098dd2f5204d6b8f1acbd3928000e9222625944bf21ad287']
      }
    },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
