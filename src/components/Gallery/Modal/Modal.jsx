import React, { Component } from 'react';
import { ModalWindov, Overlay } from './Modal.styled';
class Modal extends Component {
  render() {
    return (
      <Overlay>
        <ModalWindov>{this.props.children}</ModalWindov>
      </Overlay>
    );
  }
}

export default Modal;
