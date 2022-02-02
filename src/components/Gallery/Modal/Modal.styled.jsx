import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalWindow = styled.div`
  position: relative;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;
export const ModalBtnClose = styled.button`
  position: absolute;
  top: 14px;
  right: 25px;
  width: 34px;
  height: 34px;
  border-color: transparent;
  background-color: transparent;
  > svg {
    width: 40px;
    height: 40px;
    fill: #f5b766;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      fill: #f5b766;
      transform: scale(1.3);
    }
  }
`;
