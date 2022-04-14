import React, { Component } from 'react';
import { Icon, Form, Button } from 'semantic-ui-react';

class IdentityPicker extends Component {
  render () {
    const { values } = this.props;

    return (
      <Form>
        <Button.Group fluid>
          <Button icon color='green' onClick={this._handleGeneratorButtonClick.bind(this)} onKeyPress={this._handleGenerateKeyPress.bind(this)} labelPosition='left'>Generate <Icon name='leaf' /></Button>
          <Button.Or />
          <Button icon color='blue' onClick={this._handleRestoreButtonClick.bind(this)} onKeyPress={this._handleRestoreKeyPress.bind(this)} labelPosition='right'>Restore from Seed Phrase <Icon name='right chevron' /></Button>
        </Button.Group>
        <Button type='submit' onClick={this.saveAndContinue.bind(this)}>Save And Continue</Button>
      </Form>
    );
  }

  saveAndContinue (e) {
    e.preventDefault();
    this.props.nextStep();
  }

  _handleRestoreButtonClick () {
    this.setState({ step: 'SEED_RESTORE_START' });
  }

  _handleGeneratorButtonClick () {
    this.setState({ step: 'SEED_GENERATE_START' });
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

export default IdentityPicker;
