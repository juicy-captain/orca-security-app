import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #10111d;
  cursor: pointer;
`;

export const InputCheckBox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + ${Label} {
    display: inline-flex;
    align-items: center;
    user-select: none;
    &::before {
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      flex-shrink: 0;
      flex-grow: 0;
      background: #fdfdff;
      border: 1px solid #cacfdb;
      border-radius: 2px;
      margin-right: 8px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 8px 6.5px;
      transition: 0.3s ease;
    }
  }

  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: #0080ff;
  }

  &:not(:disabled):active + label::before {
    background-color: #0080ff;
    border-color: #0080ff;
  }

  &:focus:not(:checked) + label::before {
    border-color: #cacfdb;
  }

  &:checked + label::before {
    border-color: #0080ff;
    background-color: #0080ff;
    background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.74747 0.200722C6.88463 0.0726072 7.06979 0.000504724 7.26292 2.63976e-06C7.45605 -0.000499445 7.64163 0.0706392 7.77954 0.198039C7.91745 0.325439 7.9966 0.498863 7.99989 0.680818C8.00318 0.862773 7.93035 1.03864 7.79713 1.17039L3.8847 5.77863C3.81746 5.84688 3.7363 5.90164 3.64608 5.93966C3.55587 5.97767 3.45844 5.99816 3.35963 5.99988C3.26082 6.00161 3.16265 5.98454 3.07101 5.94969C2.97936 5.91485 2.8961 5.86295 2.82623 5.7971L0.23395 3.35353C0.161732 3.29013 0.103808 3.21366 0.0636333 3.1287C0.0234584 3.04374 0.00185576 2.95202 0.000114393 2.85902C-0.00162697 2.76603 0.0165286 2.67365 0.0534978 2.58741C0.0904669 2.50116 0.145492 2.42282 0.215291 2.35705C0.285091 2.29128 0.368233 2.23943 0.45976 2.20459C0.551287 2.16976 0.649322 2.15265 0.748017 2.15429C0.846713 2.15593 0.944047 2.17629 1.03421 2.21414C1.12438 2.252 1.20553 2.30658 1.27282 2.37463L3.32508 4.30751L6.72885 0.221039C6.73493 0.213886 6.74147 0.207099 6.74845 0.200722H6.74747Z' fill='white'/%3E%3C/svg%3E%0A");
  }

  &:disabled + label::before {
    background-color: #fdfdff;
  }
`;

export const InputWrapper = styled.div`
  display: block;
`;
