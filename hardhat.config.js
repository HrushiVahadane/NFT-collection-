require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      chainID: 8,
      url: 'https://falling-soft-glade.ethereum-goerli.discover.quiknode.pro/b557e29b1b6235648e41277b55a2af695a4b8cae/',
      accounts: ['0x${708cf4c1663e3b3ed0a1143bfb49e0ad9214e62d281e941e46fa35e7763e9dc6}'],
    },
  },
};