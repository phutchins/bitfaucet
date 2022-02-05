// Cryptography
import { createHash } from 'crypto';

// Dependencies
import * as bitcoin from 'bitcoinjs-lib';

// React
import merge from 'lodash.merge';
import React from 'react';
// import { connect } from 'react-redux';
// import FabricStateMapper from '../StateMapper';

// Fabric Types
import FabricComponent from '../types/component';

// Fabric Services
// import Bitcoin from '@fabric/core/services/bitcoin';

// Components
import {
  Button,
  // Container,
  Dropdown,
  Form,
  // Grid,
  Icon,
  Input
  // Menu,
  // Segment
} from 'semantic-ui-react';

// Internals
// import FabricKeyPair from './FabricKeyPair';

// Fabric Types
import * as Actor from '@fabric/core/types/actor';
// import * as Key from '@fabric/core/types/key';
// import * as Signer from '@fabric/core/types/signer';

class FaucetDripForm extends FabricComponent {
  constructor (props) {
    super(props);

    this.settings = merge({
      network: 'regtest'
    }, props);

    /* this.wallet = new Wallet({
      network: this.settings.network
    }); */

    // this.key = new Key(this.settings);
    // this._key = new bcoin.hd.key();

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = merge({
      address: null,
      content: {
        requests: []
      },
      requests: {},
      secret: Actor.randomBytes(32) // solution hash (revealed on trade)
    }, props);

    // this.bitcoin = new Bitcoin(this.settings);
    this.address = React.createRef();

    return this;
  }

  get networks () {
    return {
      'mainnet': bitcoin.networks.mainnet,
      'regtest': bitcoin.networks.regtest,
      'testnet': bitcoin.networks.testnet
    };
  }

  _handleAddressChange (e) {
    this.setState({ address: e.target.value });

    console.log('state:', this.state);
    console.log('value:', e.target.value);
    console.log('network:', this.networks.regtest);
    const isValid = this.validateAddress(e.target.value);
    console.log('isValid:', isValid);

    if (isValid) {

    } else {
      this.setState({
        status: 'ERROR',
        errors: [
          'Invalid Bitcoin address.'
        ]
      });
    }
  }

  _handleSecretChange (e) {
    this.setState({ secret: e.target.value });
  }

  _handleSubmitButtonClick (e) {
    console.log('submit button click:', e);
  }

  _handleChange (e) {
    const fields = { ...this.state.fields, [e.target.name]: e.target.value };
    // TODO: merge old state
    this.setState({ fields: fields });
  }

  handleChange (e) {
    this.setState({ address: e.target.value });
  }

  handleSubmit (e) {
    console.log('submitting:', e);
    const { name, email } = this.state
    this.setState({ submittedName: name, submittedEmail: email })
  }

  regenerate () {
    this.setState({ secret: Actor.randomBytes(32) });
    this.sync();
  }

  render () {
    return (
      <>
        <Form ref={this.form} onSubmit={this.props.onSubmit.bind(this)} onChange={this.handleChange.bind(this)}>
          <Form.Field>
            <label>Request a deposit to...</label>
            <div className='ui input'>
              <Input ref={this.address} action type='text' placeholder='Enter a Bitcoin address here' />
              <Button attached type='submit' color='green' content='Request' icon='right chevron' labelPosition='right' onClick={this.props.onSubmit.bind(this)} />
            </div>
          </Form.Field>
        </Form>
      </>
    );
  }

  start () {
    console.log('[FAUCET:DRIPS]', 'Starting component...');
    super.start();
    this.sync();
    return this;
  }

  sync () {
    const preimage = createHash('sha256').update(this.state.secret).digest('hex');
    this.setState({ preimage: preimage });
    return this;
  }

  validateAddress (address) {
    try {
      bitcoin.address.toOutputScript(address, this.networks[this.settings.network]);
      return true;
    } catch (e) {
      return false;
    }
  }
}

// export default PortalOrderForm;
export default FaucetDripForm;
