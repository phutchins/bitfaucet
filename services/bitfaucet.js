'use strict';

// Dependencies
const merge = require('lodash.merge');

// Fabric Types
const Actor = require('@fabric/core/types/actor');
const Service = require('@fabric/core/types/service');

// Fabric Services
const Bitcoin = require('@fabric/core/services/bitcoin');
const HTTPServer = require('@fabric/http/types/server');

class BitFaucet extends Service {
  constructor (settings = {}) {
    super(settings);

    // Settings
    this.settings = merge({
      bitcoin: {
        authority: 'http://rpcusername:rpcpassword@localhost:8444'
      },
      http: {
        port: 7222
      },
      pours: {
        amount: 0.01
      }
    }, settings);

    // Services
    this.bitcoin = new Bitcoin(this.settings.bitcoin);
    this.http = new HTTPServer(this.settings.http);

    // Faucet methods
    this.http._registerMethod('DripRequest', this._handleDripRequest.bind(this));

    // Local state
    this._state = {
      status: 'PAUSED',
      content: {
        pours: []
      },
      pours: {}
    };

    return this;
  }

  async _handleDripRequest (request) {
    return this.pour(request);
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
    this.trust(this.http, 'HTTP');
    await this.bitcoin.start();
    await this.http.start();
    this.emit('ready', { id: this.id });
    return this;
  }
}

module.exports = BitFaucet;
