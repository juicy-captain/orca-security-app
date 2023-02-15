import styled, { css } from 'styled-components';
import { BaseIconStyles } from 'styled-components/icons';

export const RadioIcon = styled.svg`
  width: 12px;
  height: 12px;
  fill: #10111d;
  ${BaseIconStyles}
`;

export const SelectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  text-align: center;
  height: 100%;

  svg {
    &:hover,
    &:focus {
      fill: #0080ff;
    }
  }

  ${props =>
    props.selected &&
    css`
      background: #0080ff;
      border-radius: 4px;

      svg {
        fill: #fff;
        &:hover,
        &:focus {
          fill: #fff;
        }
      }
    `}
`;
