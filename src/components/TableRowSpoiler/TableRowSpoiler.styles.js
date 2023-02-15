import { ButtonWrapper } from 'components/Button/Button.styles';
import { DropdownActions } from 'components/Dropdown/Dropdown.styles';
import { IpInfoSC } from 'components/IpInfo/IpInfo.styles';
import { RiskLevel } from 'components/RiskLevel/RiskLevel';
import { tableSize } from 'components/TableView/TableView.styles';
import styled, { css } from 'styled-components';

export const MoreInfoWrapper = styled.div`
  .spoiler-enter {
    max-height: 208px;
    transition: max-height 400ms, padding-top 400ms, padding-bottom 400ms;
    padding: 32px 32px 24px;
    border: 1px solid #cacfdb;
  }
  .spoiler-enter-done {
    max-height: 208px;
    transition: max-height 400ms, padding-top 400ms, padding-bottom 400ms;
    padding: 32px 32px 24px;
    border: 1px solid #cacfdb;
    overflow: scroll;
  }
  .spoiler-exit {
    max-height: 0px;
    transition: max-height 400ms, padding-top 400ms, padding-bottom 400ms;
    padding: 32px 32px 24px;
    border: 1px solid #cacfdb;
  }
  .spoiler-exit-active {
    max-height: 0px;
    transition: max-height 400ms, padding-top 400ms, padding-bottom 400ms;
    padding: 0px 32px;
    border: 1px solid #cacfdb;
  }
  .spoiler-exit-done {
    /* max-height: 0px; */
    transition: max-height 400ms, padding-top 400ms, padding-bottom 400ms;
    padding: 0 32px;
    border: 0;
  }
`;

export const TableCell = styled.div`
  display: block;
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
  text-align: left;
  margin-right: 42px;
  word-wrap: break-word;
  ${tableSize}

  ${props =>
    props.file &&
    css`
      span {
        color: #cacfdb;
      }
    `}

  ${props =>
    props.ipv4 &&
    css`
      ${IpInfoSC} span {
        max-width: 140px;
      }
    `}

  &:first-child {
    padding-left: 32px;
    border-left-style: solid;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-right-style: solid;
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
    padding-right: 32px;
    margin-right: 0;
  }
`;

export const RiskIcon = styled(RiskLevel)`
  padding: 5px;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  color: #000000;
  background: #ffffff;
  border: 1px solid #cacfdb;
  border-radius: 4px;
  padding: 16px 0;
  transition: 0.3s ease;
  cursor: pointer;
  z-index: 2;

  &:hover,
  &:focus {
    background: #10111d;
    color: #fff;
    border-color: #10111d;

    svg {
      fill: #fff;
      border-color: #fff;
    }

    ${TableCell}, ${TableCell} span {
      color: #fff;
    }
  }
`;

export const MoreInfoContainer = styled.div``;
export const MoreInfoTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #70707b;
  margin-bottom: 8px;
`;
export const MoreInfoText = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
  margin-bottom: 16px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  ${ButtonWrapper} {
    margin-right: 16px;
  }

  ${DropdownActions} {
    width: 100%;
  }
`;

export const MoreInfoContent = styled.div`
  position: relative;
  word-break: break-word;
  transform: translateY(-8px);
  background-color: #fff;
  max-height: 0px;
  overflow: hidden;
  border-radius: 4px;
  z-index: 1;
`;
