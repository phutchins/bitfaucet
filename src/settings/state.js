'use strict';

// TODO: evaluate why have to climb tree?
const playnet = require('../../node_modules/@fabric/core/settings/playnet');

module.exports = {
  host: 'faucet.playnet.portaldefi.com',
  port: 443,
  secure: true,
  seed: null,
  status: 'PAUSED',
  balances: [
    { asset: 'Bitcoin', symbol: 'BTC', confirmed: 0, type: 'confirmed' },
    { asset: 'Liquid BTC (LBTC)', symbol: 'BTC', confirmed: 0, type: 'confirmed' },
    { asset: 'Shyft', symbol: 'SHFT', confirmed: 0, type: 'confirmed' },
    { asset: 'Bitcoin (testnet)', symbol: 'TBTC', confirmed: 0, type: 'confirmed' },
    { asset: 'Bitcoin (regtest)', symbol: 'RBTC', confirmed: 0, type: 'confirmed' },
    { asset: 'BTC A', symbol: 'BTCA', confirmed: 0, type: 'confirmed' },
    { asset: 'BTC B', symbol: 'BTCB', confirmed: 0, type: 'confirmed' },
    { asset: 'Lightning BTC', symbol: 'BTC', confirmed: 0.001, type: 'outbound' },
    { asset: 'Lightning BTC', symbol: 'BTC', confirmed: 0.001, type: 'inbound' }
  ],
  chains: [
    { name: 'Fabric (playnet)', asset: 'PFAB', tip: '???' },
    { name: 'Bitcoin (mainnet)', asset: 'BTC', tip: '???', genesis: '000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f' },
    { name: 'Bitcoin (regtest)', asset: 'RBTC', tip: '???' },
    { name: 'Bitcoin (testnet)', asset: 'TBTC', tip: '???' },
    { name: 'BTC A (regtest)', asset: 'BTCA', tip: '???' },
    { name: 'BTC B (regtest)', asset: 'BTCB', tip: '???' },
    { name: 'Ethereum (Ropsten)', asset: 'ETHR', tip: '???' }
  ],
  channels: [],
  keys: [],
  identity: {
    id: '',
    seed: playnet.key.seed
  },
  nodes: [
/**/'localhost:9977', // BTC   `                                              /**/
/**/'localhost:9978', // BTCA   \___                                          /**/
/**/'localhost:9979', // BTCB   /    }- Together these are the first 3 chains /**/\
    'localhost:9980', // Liquid
    'localhost:9981', // Shyft
  ],
  orders: [],
  peers: [
    { id: '???', alias: 'NUEVO', host: 'localhost', port: '7777', asset: 'BTC' }
  ],
  transactions: []
};
