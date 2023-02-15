import styled from 'styled-components';

export const ModalContainer = styled.div`
  .modal-enter {
    opacity: 0;
    transition: 0.3s;
  }
  .modal-enter-active {
    opacity: 1;
    transition: 0.3s;
  }

  .modal-exit {
    opacity: 1;
    transition: 0.3s;
  }
  .modal-exit-active {
    opacity: 0;
    transition: 0.3s ease-in-out;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 35;
  background: rgba(16, 17, 29, 0.3);
  opacity: 1;
`;

export const ModalWrapper = styled.div`
  width: 900px;
  background: #ffffff;
  border-radius: 4px;
  padding: 24px;
`;
