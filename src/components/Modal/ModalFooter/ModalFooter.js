import { Button } from 'components/Button/Button';
import { DownloadActions } from 'components/DownloadActions/DownloadActions';
import PropTypes from 'prop-types';
import { ModalFooterSC } from './ModalFooter.styles';

export const ModalFooter = ({ modalAction, ...props }) => {
  return (
    <ModalFooterSC>
      <Button buttonType="primary" {...props} onClick={modalAction}>
        Download
      </Button>
      <DownloadActions />
      <Button buttonType="secondary" {...props} onClick={modalAction}>
        Cancel
      </Button>
    </ModalFooterSC>
  );
};

ModalFooter.propTypes = {
  modalAction: PropTypes.func,
};
