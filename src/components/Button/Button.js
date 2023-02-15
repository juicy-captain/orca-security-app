import { ButtonWrapper } from 'components/Button/Button.styles';
import PropTypes from 'prop-types';

export const Button = ({ buttonType, children, ...props }) => {
  return (
    <ButtonWrapper {...props} buttonType={buttonType}>
      {children}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  children: null,
};
