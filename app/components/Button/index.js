import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

const Button = props => (
  <StyledButton onClick={props.onClick}>
    {props.txt}
  </StyledButton>
);

Button.propTypes = {
  txt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
