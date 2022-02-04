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

    // TODO: prepare Fabric
    // i.e., use _state here, then import from getter and apply properties
    // _from_ @react
    this.state = {
      integrity: 'sha256-deadbeefbabe'
    };

    this.bridge = React.createRef();
    this.form = React.createRef();

    return;
  }

  onSubmit (e) {
    console.log('submitting:', e);
    const { address } = this.state;
    this.setState({ address: address });

    const message = {
      content: 'Hello, world!'
    };

    this.bridge.current.send(message).then((result) => {
      console.log('result:', result);
    });
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
                      <FaucetDripForm ref={this.form} onSubmit={this.onSubmit.bind(this)} />
                    </Card.Content>
                  </Card>
                  <Card fluid>
                    <Card.Content>
                      <FabricBridge ref={this.bridge} onChange={this._handleBridgeChange.bind(this)} state={this.state} />
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
