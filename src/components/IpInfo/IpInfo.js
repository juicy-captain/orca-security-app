import PropTypes from 'prop-types';
import { CopyIcon, IpInfoSC } from './IpInfo.styles';

export const IpInfo = ({ width, height, ip, ...props }) => {
  return (
    <IpInfoSC {...props}>
      <span>{ip}</span>
      <CopyIcon width={width} height={height} fill={'#cacfdb'} name={'copy'} />
    </IpInfoSC>
  );
};

IpInfo.propTypes = {
  ip: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
