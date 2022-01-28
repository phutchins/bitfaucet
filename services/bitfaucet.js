'use strict';

// Dependencies
const merge = require('lodash.merge');

// Fabric Types
const Actor = require('@fabric/core/types/actor');
const Service = require('@fabric/core/types/service');

// Fabric Services
const Bitcoin = require('@fabric/core/services/bitcoin');

class BitFaucet extends Service {
  constructor (settings = {}) {
    super(settings);

    this.settings = merge({
      bitcoin: {
        authority: 'http://rpcusername:rpcpassword@localhost:8444'
      },
      pours: {
        amount: '00000000.01000000'
      }
    }, settings);

    this.bitcoin = new Bitcoin(this.settings.bitcoin);

    this._state = {
      status: 'PAUSED',
      content: {
        pours: []
      },
      pours: {}
    };

    return this;
  }

  async pour (address) {
    const created = (new Date()).toISOString();
    const txid = await this.bitcoin.processSpendMessage({
      amount: this.settings.pours.amount,
      created: created,
      destination: address
    });

    const pour = new Actor({
      amount: this.settings.pours.amount,
      created: created,
      destination: address,
      transaction: txid
    });

    this._state.pours[ pour.id ] = pour;
    this._state.content.pours.push(pour.id);

    return pour.id;
  }

  async start () {
    this.trust(this.bitcoin, 'BTC');
    await this.bitcoin.start();
    this.emit('ready', { id: this.id });
    return this;
  }
}

module.exports = BitFaucet;
