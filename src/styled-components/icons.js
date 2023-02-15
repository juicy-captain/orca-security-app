import styled, { css } from 'styled-components';
import svg from '../assets/img/sprite.svg';

export const BaseIconStyles = css`
  display: inline-block;
  vertical-align: middle;
  fill: #cacfdb;
  cursor: pointer;
`;

export const UseSvgIcon = ({ name }) => {
  return <use xlinkHref={svg + `#${name}`}></use>;
};

export const Icon = ({ name, width, height, fill = '#000', ...props }) => {
  return (
    <svg width={width} height={height} fill={fill} {...props}>
      <use xlinkHref={svg + `#${name}`}></use>
    </svg>
  );
};

export const Copy = styled.svg`
  width: 10px;
  height: 12px;
  ${BaseIconStyles}
`;

export const Target = styled.svg`
  width: 12px;
  height: 12px;
  ${BaseIconStyles}
`;
export const Link = styled.svg`
  width: 9px;
  height: 12px;
  ${BaseIconStyles}
`;

export const High = styled.svg`
  width: 12px;
  height: 12px;
  ${BaseIconStyles}
`;

export const Table = styled.svg`
  width: 12px;
  height: 12px;
  ${BaseIconStyles}
`;

export const Grid = styled.svg`
  width: 13px;
  height: 12px;
  ${BaseIconStyles}
`;

export const Group = styled.svg`
  width: 12px;
  height: 12px;
  ${BaseIconStyles}
`;

export const Arrow = styled.svg`
  width: 8px;
  height: 6px;
  ${BaseIconStyles}
`;

export const Download = styled.svg`
  width: 12px;
  height: 12px;
  ${BaseIconStyles}
`;
