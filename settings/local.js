'use strict';

const Environment = require('@fabric/core/types/environment');
const environment = new Environment();

module.exports = {
  seed: environment.readVariable('FABRIC_SEED'),
  bitcoin: {
    authority: 'http://ahp7iuGhae8mooBahFaYieyaixei6too:naiRe9wo5vieFayohje5aegheenoh4ee@localhost:20444'
  }
};
