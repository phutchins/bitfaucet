import merge from 'lodash.merge';
import * as bip39 from 'bip39';
// import * as Wallet from '@fabric/core/types/wallet';
import React, { Component } from 'react';

// Components
import {
  Button,
  // Container,
  Dropdown,
  Form,
  // Grid,
  // Menu,
  // Segment
} from 'semantic-ui-react';

class SeedEntryForm extends Component {
  constructor (props) {
    super(props);

    this.settings = merge({
      network: 'regtest'
    }, props);

    /* this.wallet = new Wallet({
      network: this.settings.network
    }); */

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = {
      integrity: 'sha256-deadbeefbabe',
      fields: {
        seed: '',
        password: ''
      }
    };
  }

  get _seedWords () {
    return bip39.wordlists.english.map((x, i) => {
      return {
        key: i,
        text: x,
        value: x
      };
    });
  }

  handleChange (e) {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    // TODO: merge old state
    this.setState({ fields: newFields });
  }

  handleLoginSubmit (e) {
    e.preventDefault();
    // whatever you want to do when user submits a form
    console.log('e:', e);
    console.log('e.target:', e.target);
    console.log('e.target data:', e.target.data);

    return false;
  }

  handleSubmit (e) {
    this.handleLoginSubmit(e);
    this.props.handleClose();
  }

  render () {
    // const { fields } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor='seed'>Seed Phrase (12 or 24 words)</label>
          <Dropdown placeholder='Your 12 or 24 word seed phrase' fluid multiple search selection options={this._seedWords} minCharacters={3} onChange={this.props.handleChange('seed')} />
          <Button>Load</Button>
        </Form>
      </>
    );
  }

  saveAndContinue (e) {
    e.preventDefault();
    this.props.nextStep();
  }

  _handleRestoreButtonClick () {
    this.setState({ modalOpen: true });
  }

  _handleGeneratorButtonClick () {
    this.setState({ modalOpen: true });
  }

  _handleGenerateClick () {
    console.log('generate request click');
  }

  _handleGenerateKeyPress (e) {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      console.log('Button received click with keyboard');
    }
  }

  _handleRestoreKeyPress (e) {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      console.log('Button received click with keyboard');
    }
  }
}

export default SeedEntryForm;
