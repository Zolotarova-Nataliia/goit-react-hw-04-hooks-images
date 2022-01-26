import React, { Component } from 'react';
class Modal extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="modal">{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
