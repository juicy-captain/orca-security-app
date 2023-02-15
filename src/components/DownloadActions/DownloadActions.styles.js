import { Dropdown } from 'components/Dropdown/Dropdown';
import {
  ArrowIcon,
  DropdownAction,
  DropdownLabel,
  GroupIcon,
} from 'components/Dropdown/Dropdown.styles';
import styled from 'styled-components';

export const DownloadActionsSC = styled(Dropdown)`
  ${DropdownLabel} {
    border: none;
    color: #fff;
    background: #0080ff;

    &:hover,
    &:focus {
      box-shadow: 0px 0px 0px 2px #e1eefd;

      svg {
        fill: #fff;
      }
    }
  }

  ${DropdownAction} {
    &:hover,
    &:focus {
      background: #e1eefd;
    }
  }

  ${ArrowIcon}, ${GroupIcon} {
    fill: #fff;
  }
`;
