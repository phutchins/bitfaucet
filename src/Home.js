// State
import * as defaults from './settings/state';

// Dependencies
import React from 'react';
import { connect } from 'react-redux';
import { 
  recipientAddressClear, 
  recipientAddressUpdate, 
  statusUpdate } from './features/faucet/faucetSlice';
import {
  Link
} from 'react-router-dom';

// Components
import {
  Card,
  Container,
  Divider,
  Icon,
  // Grid,
  // Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';

import FabricComponent from './types/component';

import FabricBridge from './components/FabricBridge';
// import FabricDebugger from './components/FabricDebugger';

import FaucetDripForm from './components/FaucetDripForm';
// import FabricIdentityManager from './components/FabricIdentityManager';
// import PortalMenu from './components/PortalMenu';

class Home extends FabricComponent {
  constructor (props) {
    super(props);

    this.settings = Object.assign({
      debug: false,
      host: 'localhost',
      port: 7222,
      secure: false,
      status: 'PAUSED'
    }, defaults, props.state);

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = Object.assign({}, this.settings);

    this.bridge = React.createRef();
    this.button = React.createRef();
    this.field = React.createRef();
    this.form = React.createRef();
    this.modal = React.createRef();

    return;
  }

  onSubmit (e) {
    const self = this;

    this.props.statusUpdate("LOADING");
      // this.form.current.setState({ status: 'LOADING' });
      // this.button.current.setState({ status: 'REQUESTING'});

    const address = this.props.state.recipient;
    const message = {
      type: 'Call',
      data: {
        method: 'DripRequest',
        params: [ address ]
      }
    };

    if (this.settings.debug) {
      console.log('Message to send over bridge:', message);
      console.log(`submitting address ${address}`);
    }
    setTimeout(function () {
      if (address != '') {
        self.props.statusUpdate('REQUESTING');
      }

      self.bridge.current.send(message).then((result) => {
        if (self.settings.debug) console.log('Message sent over bridge, result:', result);
        self.field.current.value = '';
        self.props.recipientAddressClear();
          // self.field.current.setState({ address: '' });

        self.props.statusUpdate("LOADED");
          // self.form.current.setState({ status: 'LOADED' });
          // self.button.current.setState({ status: 'LOADED '});
        
      });
    }, 1000);
  }

  render () {
    return (
      <>
        <fabric-faucet-home ref={this.ref}>
          <Visibility onBottomPassed={this._handleMastheadBottomPassed.bind(this)}>
            <Segment className='ui inverted vertical masthead center aligned segment'>
              <Container className='ui text container'>
                <h1 className='ui inverted header'><Icon name='tint' /> bitfaucet</h1>
                <h2>The official <code>@fabric/playnet</code> faucet.</h2>
                <Container className='left aligned' style={{ marginTop: '5em' }}>
                  <Card fluid>
                    <Card.Content>
                      <FaucetDripForm ref={this.form} button={this.button} field={this.field} onSubmit={this.onSubmit.bind(this)} />
                    </Card.Content>
                  </Card>
                  <Card fluid style={(this.state.debug) ? {} : { display: 'none' }}>
                    <Card.Content>
                      <FabricBridge ref={this.bridge} remoteReady={this._handleRemoteReady.bind(this)} secure={this.state.secure} host={this.state.host} port={this.state.port} debug={this.state.debug} state={this.state} />
                    </Card.Content>
                  </Card>
                </Container>
              </Container>
            </Segment>
          </Visibility>
        </fabric-faucet-home>
      </>
    );
  }

  _handleBridgeChange (event) {
    console.log('bridge change:', event);
  }

  _handleMastheadBottomPassed (e, { calculations }) {
    console.log('vis change:', e, calculations);
    this.setState({ calculations });
  }

  async _handleRemoteReady () {
    console.log('Remote ready!');
    this.form.current.setState({ status: 'READY' });
  }
}


const mapStateToProps = (state) => ({
  state: state
});

const mapDispatchToProps = { recipientAddressClear, 
                             recipientAddressUpdate,
                             statusUpdate };

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true})(Home);
