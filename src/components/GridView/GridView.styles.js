import { Button } from 'components/Button/Button';
import { RiskLevel } from 'components/RiskLevel/RiskLevel';
import styled, { css } from 'styled-components';

export const GridItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
`;
export const GridItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;
  padding: 20px 32px 24px;
  background: #ffffff;
  border: 1px solid #cacfdb;
  border-radius: 4px;
`;

export const GridInfoKey = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #70707b;
`;
export const GridInfoSmall = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 200px;
  width: 100%;

  ${GridInfoKey} {
    min-width: 66px;
    max-width: 66px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const GridInfoBig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 300px;
  width: 100%;
  ${GridInfoKey} {
    min-width: 95px;
    max-width: 95px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const GridInfoValue = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
`;

export const GridInfoLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 26px;

  ${props =>
    props.scan &&
    css`
      margin-top: 4px;
      align-items: flex-start;
    `};
  ${props =>
    props.file &&
    css`
      margin-top: 4px;
      align-items: flex-start;
    `}
`;

export const RiskIcon = styled(RiskLevel)`
  border: 1px solid #cacfdb;
  padding: 3px;
  margin-right: 4px;
  vertical-align: text-top;
`;

export const Filename = styled.span`
  display: inline-block;
  max-width: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
`;

export const FileSize = styled.span`
  color: #cacfdb;
  vertical-align: middle;
`;

export const MoreInfoButton = styled(Button)`
  margin-left: auto;
  background: #0080ff;
  border-color: #0080ff;
  border-radius: 4px;
  min-height: 30px;
  min-width: 200px;
  color: #fff;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 0px 2px #e1eefd;
  }
`;
