import styled from 'styled-components';
import { Icon } from 'styled-components/icons';

export const IpInfoSC = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7px;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  width: fit-content;

  & span {
    max-width: 165px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CopyIcon = styled(Icon)`
  margin-left: 7px;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: #0080ff !important;
  }
`;
