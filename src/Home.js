// Dependencies
import React from 'react';
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
      host: 'localhost',
      integrity: 'sha256-deadbeefbabe',
      status: 'PAUSED'
    }, props);

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = Object.assign({}, this.settings, props);

    this.bridge = React.createRef();
    this.button = React.createRef();
    this.field = React.createRef();
    this.form = React.createRef();
    this.modal = React.createRef();

    return;
  }

  onSubmit (e) {
    const self = this;

    this.form.current.setState({ status: 'LOADING' });
    this.button.current.setState({ status: 'LOADING '});

    const address = this.form.current.state.address;
    const message = {
      type: 'Call',
      data: {
        method: 'DripRequest',
        params: [ address ]
      }
    };

    setTimeout(function () {
      self.bridge.current.send(message).then((result) => {
        self.field.current.value = '';
        self.field.current.setState({ address: '' });
        self.form.current.setState({ status: 'LOADED' });
        self.button.current.setState({ status: 'LOADED '});
      });
    }, 1000);
  }

  render () {
    return (
      <>
        <fabric-bridge-home ref={this.ref}>
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
                  <Card fluid>
                    <Card.Content>
                      <FabricBridge ref={this.bridge} host={this.state.host} onChange={this._handleBridgeChange.bind(this)} state={this.state} />
                    </Card.Content>
                  </Card>
                </Container>
              </Container>
            </Segment>
          </Visibility>
        </fabric-bridge-home>
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
}

export default Home;
