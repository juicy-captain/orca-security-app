import { Radio } from 'components/Radio/Radio';
import PropTypes from 'prop-types';
import { ViewSelectContainer } from './ViewSelect.styles';

export const ViewSelect = ({ currentView, setView }) => {
  return (
    <ViewSelectContainer>
      <Radio value="table" selected={currentView} onChange={setView} />
      <Radio value="grid" selected={currentView} onChange={setView} />
    </ViewSelectContainer>
  );
};

Radio.propTypes = {
  currentView: PropTypes.string,
  setView: PropTypes.func,
};
