import styled from 'styled-components';
import { Link, Target } from 'styled-components/icons';

export const ScanSourceSC = styled.div`
  display: flex;
  word-break: break-word;

  a {
    display: inline;
    &:hover,
    &:focus {
      color: #0080ff;

      & svg {
        fill: #0080ff;
      }
    }
  }
`;
export const TargetIcon = styled(Target)`
  margin-right: 4px;
  margin-top: 3px;
  flex: 1 0 auto;
`;
export const LinkIcon = styled(Link)`
  margin-left: 4px;
  flex: 1 0 auto;
`;
