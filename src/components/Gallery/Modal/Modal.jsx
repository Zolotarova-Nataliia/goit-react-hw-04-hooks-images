import React, { Component } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalWindow>{this.props.children}</ModalWindow>
      </Overlay>
    );
  }
}

export default Modal;
