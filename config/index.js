var config = {
  local: {
    mode: 'local',
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
    faucet_address: 'miWQvs1rZFgBjXsP7nfyYA7tBvG6dHgV9d'
  },
  staging: {
    mode: 'staging',
    port: 4000,
    mongo: {
      host: 'localhost',
      port: 27017
    }
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
  return config[mode || process.argv[2] || 'local'] || config.local;
}
