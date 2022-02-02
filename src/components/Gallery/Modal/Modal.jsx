import { ModalWindow, Overlay } from './Modal.styled';

export default function Modal(props) {
  return (
    <Overlay>
      <ModalWindow>{props.children}</ModalWindow>
    </Overlay>
  );
}
