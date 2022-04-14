'use strict';

const settings = require('../settings/local');

const Node = require('@fabric/core/types/node');
const BitFaucet = require('../services/bitfaucet');

async function main (input = {}) {
  const node = new Node({
    service: BitFaucet,
    settings: input
  });
  await node.start();
  return node.id;
}

main(settings).catch((exception) => {
  console.error('[BITFAUCET:NODE] Main Process Exception:', exception);
}).then((output) => {
  console.log('[BITFAUCET:NODE] Main Process Output:', output);
});
