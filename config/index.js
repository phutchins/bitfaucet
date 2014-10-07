var config = {
  testnet: {
    mode: 'testnet',
    name: 'Testnet3',
    port: 3000,
    mongo: {
      host: 'localhost',
      port: 27017
    },
    bitcoin: {
      host: '127.0.0.1',
      port: 8332,
      user: 'phutchins',
      pass: 'iamsatoshi',
      timeout: 30000
    },
    faucet_address: 'miWQvs1rZFgBjXsP7nfyYA7tBvG6dHgV9d',
    bit_limit: '5.0'
  },
  bptestnet: {
    mode: 'bptestnet',
    name: 'BPTestnet',
    port: 4000,
    mongo: {
      host: 'localhost',
      port: 27017
    },
    bitcoin: {
      host: '127.0.0.1',
      port: 20003,
      user: 'bitpaytest',
      pass: 'local321',
      timeout: 30000
    },
    faucet_address: 'mgwvgQD1WkT71dXFfW2NXY44VnRLJTJofS',
    bit_limit: '100'
  },
  production: {
    mode: 'production',
    port: 80,
    mongo: {
      host: 'localhost',
      port: 27017
    }
  }
}

module.exports = function(mode) {
  return config[mode || process.argv[2] || 'testnet'] || config.testnet;
}
