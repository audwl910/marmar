/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class UserVideoComponent extends Component {
  getNicknameTag() {
    // Gets the nickName of the user
    return JSON.parse(this.props.streamManager.stream.connection.data)
      .clientData;
  }

  getNum() {
    console.log(
      JSON.parse(this.props.streamManager.stream.connection.data).num,
    );
    return JSON.parse(this.props.streamManager.stream.connection.data).num;
  }

  render() {
    return (
      <div>
        {this.props.streamManager !== undefined ? (
          <div className="streamcomponent min-h-full">
            <OpenViduVideoComponent streamManager={this.props.streamManager} />
            <div>
              <p>{this.getNicknameTag()}</p>
              <p>{this.getNum()}</p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
