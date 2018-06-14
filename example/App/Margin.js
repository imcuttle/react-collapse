import React from 'react';
import {Collapse} from '../../src';


export class Margin extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }


  render() {
    const {isOpened} = this.state;

    return (
      <div>
        <div className="config">
          <label className="label">
            Opened:
            <input
              className="input"
              type="checkbox"
              checked={isOpened}
              onChange={({target: {checked}}) => this.setState({isOpened: checked})} />
          </label>
        </div>

        <Collapse isOpened={isOpened}>
          <div style={{backgroundColor: 'red', marginTop: 100, marginBottom: 200, height: 100}} />
          <div style={{backgroundColor: 'green', marginTop: 100, marginBottom: 200, height: 100}} />
        </Collapse>
      </div>
    );
  }
}
