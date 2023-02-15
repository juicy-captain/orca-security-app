import PropTypes from 'prop-types';
import { UseSvgIcon } from 'styled-components/icons';
import { LinkIcon, ScanSourceSC, TargetIcon } from './ScanSourсe.styles';

export const ScanSource = ({ link }) => {
  return (
    <ScanSourceSC>
      <TargetIcon>
        <UseSvgIcon name={'target'} />
      </TargetIcon>
      <a href={link} target={'_blank'} rel="noreferrer">
        {link}
        <LinkIcon>
          <UseSvgIcon name={'link'} />
        </LinkIcon>
      </a>
    </ScanSourceSC>
  );
};

ScanSource.propTypes = {
  link: PropTypes.string,
};
