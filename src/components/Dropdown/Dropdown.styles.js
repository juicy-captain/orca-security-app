import styled, { css } from 'styled-components';
import { Arrow, Icon } from 'styled-components/icons';

export const GroupIcon = styled(Icon)`
  margin-right: 8px;
  transition: 0.3s ease;
  fill: #cacfdb;
`;

export const ArrowIcon = styled(Arrow)`
  margin-left: 8px;
  transition: 0.3s ease;

  ${props =>
    props.opened &&
    css`
      transform: rotate(180deg);
    `}
`;
export const DropdownContainer = styled.div`
  position: relative;
`;
export const DropdownLabel = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
  background: #ffffff;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  padding: 6px 8px;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover,
  &:focus {
    border-color: #0080ff;

    svg {
      fill: #0080ff;
    }
  }
`;

export const DropdownActions = styled.div`
  display: none;
  position: absolute;
  background: #ffffff;
  width: 122px;
  right: 0px;
  bottom: -5px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  transform: translateY(100%);
  z-index: 10;
  padding: 4px 0;

  ${props =>
    props.opened &&
    css`
      display: block;
    `}
`;
export const DropdownAction = styled.button`
  width: 100%;
  padding: 4px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
  display: flex;
  transition: 0.5s;
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #0080ff;
    transition: 0.3s;
  }
`;
