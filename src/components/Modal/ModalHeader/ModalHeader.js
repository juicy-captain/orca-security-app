import PropTypes from 'prop-types';
import { UseSvgIcon } from 'styled-components/icons';
import { ModalClose, ModalHeaderSC, ModalIcon, ModalTitle } from './ModalHeader.styles';

export const ModalHeader = ({ modalClose }) => {
  return (
    <ModalHeaderSC>
      <ModalTitle>
        <ModalIcon width={16} height={16} name={'high'} />
        Luctus
      </ModalTitle>
      <ModalClose onClick={modalClose}>
        <UseSvgIcon name={'close'} />
      </ModalClose>
    </ModalHeaderSC>
  );
};

ModalClose.propTypes = {
  modalClose: PropTypes.func,
};
