import styled, { css } from 'styled-components';
import { Icon } from 'styled-components/icons';

export const RiskIcon = styled(Icon)`
  border: 1px solid;
  border-radius: 4px;
  vertical-align: middle;

  ${props =>
    (props.level === 'high' &&
      css`
        fill: #e2005e;
        border-color: #e2005e;
      `) ||
    (props.level === 'medium' &&
      css`
        fill: #fe7b1f;
        border-color: #fe7b1f;
      `) ||
    (props.level === 'low' &&
      css`
        fill: #f8cd39;
        border-color: #f8cd39;
      `)}
`;
