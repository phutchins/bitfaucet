// Cryptography
import { createHash } from 'crypto';

// Dependencies
import * as bitcoin from 'bitcoinjs-lib';

// React
import merge from 'lodash.merge';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  addressClear, 
  addressUpdate,
  setState,
  statusUpdate,
} from '../features/faucet/faucetSlice'
// import FabricStateMapper from '../StateMapper';

// Fabric Types
import FabricComponent from '../types/component';

// Fabric Components
import FabricModal from './FabricModal';

// Fabric Services
// import Bitcoin from '@fabric/core/services/bitcoin';

// Components
import {
  Button,
  Form,
  Input
} from 'semantic-ui-react';

// Internals
// import FabricKeyPair from './FabricKeyPair';

// Fabric Types
import * as Actor from '@fabric/core/types/actor';
import { render } from 'react-dom';
// import * as Key from '@fabric/core/types/key';
// import * as Signer from '@fabric/core/types/signer';


export default function FaucetDripForm (props) {
  const address = useSelector((state) => state.faucet.address);
  const [inputAddress, setInputAddress] = useState(address);
  const dispatch = useDispatch();

  const settings = Object.assign({
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
  const state = useSelector((state) => Object.assign({
    address: address,
    content: {
      requests: []
    },
    requests: {},
    secret: Actor.randomBytes(32), // solution hash (revealed on trade)
    status: 'LOADING'
  }, props, state));
  
  // TODO: evaluate removing ZMQ
  // this.bitcoin = new Bitcoin(this.settings);

  useEffect(() => {
    setInputAddress(address);
  }, [address]);


  const networks = () => {
    return {
      'mainnet': bitcoin.networks.mainnet,
      'regtest': bitcoin.networks.regtest,
      'testnet': bitcoin.networks.testnet
    };
  }

  const _handleAddressChange = (e) => {
    this.setState({ address: e.target.value });
    const isValid = this.validateAddress(e.target.value);
    if (!isValid) {
      this.setState({
        status: 'ERROR',
        errors: [
          'Invalid Bitcoin address.'
        ]
      });
    }
  }

  const _handleSecretChange = (e) => {
    this.setState({ secret: e.target.value });
  }

  const _handleSubmitButtonClick = (e) => {
    console.log('submit button click:', e);
  }

  const _handleChange = (e) => {
    const fields = { ...this.state.fields, [e.target.name]: e.target.value };
    // TODO: merge old state
    this._handleAddressChange(e);
    this.setState({ fields: fields });
  }

  const handleChange = (e) => {
    setInputAddress(e.target.value);

    // TODO: add debounce
    // TODO: add validateAddress
    // if(inputAddress) {
      addressUpdate(inputAddress);
    // } else addressUpdate('');
  }

  const handleSubmit = (e) => {
    _handleSubmitButtonClick(e);
  }

  const validateAddress = (address) => {
    try {
      bitcoin.address.toOutputScript(address, this.networks[this.settings.network]);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  return (
    <>
      <Form
        ref={props.form}
        loading={(state.status.value === 'LOADING')}
        disabled={(state.status.value === 'LOADING')}
        onSubmit={props.onSubmit.bind(this)}>
        <Form.Field>
          <label>Request a deposit to&hellip;</label>
          <div className='ui input'>
            <Input ref={props.field} action type='text' placeholder='Enter a Bitcoin address here' value={inputAddress} onChange={(e) => handleChange(e)} />
            <Button
              attached
              type='submit'
              loading={(state.status.value === 'SUBMITTING')}
              disabled={(state.status.value === 'SUBMITTING')}
              color='green' content='Request' icon='right chevron' labelPosition='right' onClick={props.onSubmit.bind(this)} />
          </div>
          <FabricModal />
        </Form.Field>
      </Form>
    </>
  )



  // start () {
  //   console.log('[FAUCET:DRIPS]', 'Starting component...');
  //   super.start();
  //   this.sync();
  //   return this;
  // }

  // sync () {
  //   const preimage = createHash('sha256').update(this.state.secret).digest('hex');
  //   this.setState({ preimage: preimage });
  //   return this;
  // }

}
