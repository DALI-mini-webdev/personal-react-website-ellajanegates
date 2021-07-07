import React, { Component } from 'react';
import './Contact.css';

class Message extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='message'>
        <p>{this.props.firstName}</p>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Message;