import React, { Component } from 'react';
import Albomrow from './Albomrow';

class Albomcard extends Component {
  render() {
    const { userId, id, title } = this.props.album;
    return (
      <div className="container albom-container">
        <div className="box albom-heding-container">
          <div className="box albom-heding">
            <p className="albom-text">{title} </p>
            <p style={{ color: 'rgb(204, 197, 197)' }}>
              id : {id}, userId : {userId}
            </p>
          </div>
        </div>
        <div className="box albom-body-container">
          <Albomrow id={id} />
        </div>
      </div>
    );
  }
}

export default Albomcard;
