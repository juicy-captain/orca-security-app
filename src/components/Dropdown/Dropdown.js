import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { UseSvgIcon } from 'styled-components/icons';
import { useOnClickOutside } from '../../hooks/use-on-click-outside';
import {
  ArrowIcon,
  DropdownAction,
  DropdownActions,
  DropdownContainer,
  DropdownLabel,
  GroupIcon,
} from './Dropdown.styles';

export const Dropdown = ({ label, icon, actions, ...props }) => {
  const [isOptionsOpened, setOptionsOpened] = useState(false);
  const keyLabel = label.replace(/\s/g, '_');

  const refDropdownActions = useRef(null);
  useOnClickOutside(refDropdownActions, () => setOptionsOpened(false));

  return (
    <DropdownContainer ref={refDropdownActions} {...props}>
      <DropdownLabel onClick={() => setOptionsOpened(!isOptionsOpened)}>
        {icon && <GroupIcon width={12} height={12} name={icon} />}
        {label}
        <ArrowIcon opened={isOptionsOpened}>
          <UseSvgIcon name={'arrow'} />
        </ArrowIcon>
      </DropdownLabel>
      <DropdownActions opened={isOptionsOpened}>
        {actions.map((el, i) => (
          <DropdownAction key={`${keyLabel}_${i}`}>{el}</DropdownAction>
        ))}
      </DropdownActions>
    </DropdownContainer>
  );
};

Dropdown.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  isOptionsOpened: PropTypes.bool,
};
