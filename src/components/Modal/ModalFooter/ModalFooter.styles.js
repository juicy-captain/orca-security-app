import { DownloadActionsSC } from 'components/DownloadActions/DownloadActions.styles';
import styled from 'styled-components';

export const ModalFooterSC = styled.div`
  display: flex;
  justify-content: flex-end;

  & button:not(:last-child) {
    margin-right: 16px;
  }

  ${DownloadActionsSC} {
    margin-right: 16px;
  }
`;
