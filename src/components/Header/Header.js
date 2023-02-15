import { CheckBox } from 'components/Checkbox/Checkbox';
import { Dropdown } from 'components/Dropdown/Dropdown';
import { ViewSelect } from 'components/ViewSelect/ViewSelect';
import PropTypes from 'prop-types';
import { UseSvgIcon } from 'styled-components/icons';
import { HeaderOptions, HeaderPanel, Logo } from './Header.styles';

export const Header = ({ currentView, setView }) => {
  return (
    <HeaderPanel>
      <Logo>
        <UseSvgIcon name={'logo'} />
      </Logo>

      <HeaderOptions>
        <CheckBox connectId="ShowMore">Show additional items</CheckBox>

        <Dropdown label="Group by" icon="group" actions={['Increase', 'Descending']} />
        <Dropdown
          label="Sort by"
          icon="sort"
          actions={['Name', 'Scan source', 'IP Address v6', 'IP Address v4', 'File name']}
        />
        <ViewSelect currentView={currentView} setView={setView} />
      </HeaderOptions>
    </HeaderPanel>
  );
};

Header.propTypes = {
  currentView: PropTypes.string,
  setView: PropTypes.func,
};
