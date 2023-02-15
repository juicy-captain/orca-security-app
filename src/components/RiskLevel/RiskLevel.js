import PropTypes from 'prop-types';
import { RiskIcon } from './RiskLevel.styles';

export const RiskLevel = ({ level, width, height, ...props }) => {
  return <RiskIcon level={level} name={level} width={width} height={height} {...props} />;
};

RiskLevel.propTypes = {
  level: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
