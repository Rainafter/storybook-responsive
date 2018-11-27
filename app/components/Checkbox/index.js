import React from 'react';
import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from './styled';

const Checkbox = props => (
  <StyledLabel>
    <StyledInput type="checkbox" checked={props.checked} onChange={props.onChange} />
    <span className="checkmark" />
  </StyledLabel>
);

Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
