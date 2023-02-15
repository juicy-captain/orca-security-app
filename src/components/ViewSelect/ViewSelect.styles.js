import styled, { css } from 'styled-components';

export const ViewSelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 30px;
  background: #ffffff;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  padding: 1px;
`;

export const SelectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  text-align: center;
  height: 100%;

  ${props =>
    props.active &&
    css`
      background: #0080ff;
      border-radius: 4px;

      &:hover {
      }
    `}
`;
