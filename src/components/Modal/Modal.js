import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import { ModalContainer, ModalOverlay, ModalWrapper } from './Modal.styles';
import { ModalContent } from './ModalContent/ModalContent';
import { ModalFooter } from './ModalFooter/ModalFooter';
import { ModalHeader } from './ModalHeader/ModalHeader';

export const Modal = ({ opened, setModalAction, level, icon, name, content }) => {
  useEffect(() => {
    document.body.style.overflow = opened ? 'hidden' : '';
  }, [opened]);

  const refModalWrapper = useRef(null);
  useOnClickOutside(refModalWrapper, setModalAction);
  return (
    <ModalContainer>
      <CSSTransition
        in={opened}
        timeout={200}
        classNames="modal"
        unmountOnExit
        nodeRef={refModalWrapper}
      >
        <ModalOverlay>
          <ModalWrapper ref={refModalWrapper} open={opened}>
            <ModalHeader
              modalClose={setModalAction}
              level={level}
              icon={icon}
              name={name}
              content={content}
            />
            <ModalContent />
            <ModalFooter modalAction={setModalAction} />
          </ModalWrapper>
        </ModalOverlay>
      </CSSTransition>
    </ModalContainer>
  );
};

Modal.propTypes = {
  opened: PropTypes.bool,
  setModalAction: PropTypes.func,
};
