import styled, { css } from 'styled-components';

export const tableSize = css`
  ${props =>
    (props.risk &&
      css`
        width: 56px;
      `) ||
    (props.name &&
      css`
        width: 115px;
      `) ||
    (props.file &&
      css`
        width: 175px;
      `) ||
    (props.ipv6 &&
      css`
        width: 200px;
      `) ||
    (props.ipv4 &&
      css`
        width: 170px;
      `) ||
    (props.scan &&
      css`
        width: auto;
      `)}
`;

export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0px;
  margin: 0px;
`;

export const TableHeadingRow = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  /* margin-bottom: 8px; */
`;

export const TableHeadingCell = styled.div`
  position: relative;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #70707b;
  text-align: left;
  margin-right: 42px;
  ${tableSize}

  &:last-child {
    margin-right: 0;
  }
`;
