import styled, { css } from 'styled-components';

const getButtonColor = props => {
  switch (props.buttonType) {
    case 'primary':
      return css`
        background: #0080ff;
        color: #fff;
        border: 1px solid #0080ff;
        &:hover {
          box-shadow: 0px 0px 0px 2px #e1eefd;
          transition: 0.3s;
        }
      `;
    case 'secondary':
      return css`
        border: 1px solid #70707b;
        background: #fff;
        color: #10111d;
        &:hover {
          box-shadow: 0px 0px 0px 2px #e1eefd;
          transition: 0.3s;
        }
      `;
    default:
      return css`
        background: #0080ff;
        color: #ffffff;
      `;
  }
};

export const ButtonWrapper = styled.button`
  border: 1px solid #000;
  background-color: #eee;
  padding: 5px 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  border-radius: 4px;
  cursor: pointer;
  ${props => getButtonColor(props)};
`;
