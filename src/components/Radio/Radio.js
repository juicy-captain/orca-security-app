import PropTypes from 'prop-types';
import { UseSvgIcon } from 'styled-components/icons';
import { RadioIcon, SelectItem } from './Radio.styles';

export const Radio = ({ selected, onChange, value }) => {
  return (
    <SelectItem
      onClick={() => {
        onChange(value);
      }}
      selected={value === selected}
    >
      <RadioIcon>
        <UseSvgIcon name={value} />
      </RadioIcon>
    </SelectItem>
  );
};

Radio.propTypes = {
  onChange: PropTypes.func,
  selected: PropTypes.string,
  value: PropTypes.string,
};
