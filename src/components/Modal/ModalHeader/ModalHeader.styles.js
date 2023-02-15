import styled from 'styled-components';
import { Icon } from 'styled-components/icons';

export const ModalHeaderSC = styled.div`
  height: 80px;
  border-bottom: 1px solid #cacfdb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: -24px -24px 24px;
  padding: 24px;
`;
export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 18px;
  color: #10111d;
`;
export const ModalClose = styled.svg`
  width: 16px;
  height: 16px;
  fill: #cacfdb;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    fill: #0080ff;
    transition: 0.3s;
  }
`;

export const ModalIcon = styled(Icon)`
  fill: #fff;
  padding: 8px;
  background: #e2005e;
  border-radius: 4px;
  margin-right: 12px;
`;
