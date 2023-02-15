import styled from 'styled-components';

export const HeaderPanel = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #cacfdb;
  margin-bottom: 32px;
`;

export const Logo = styled.svg`
  width: 94px;
  height: 40px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
`;

export const HeaderOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
