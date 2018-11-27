import React from 'react';
import PropTypes from 'prop-types';
import { ErrorWrapper } from './styled';

const ErrorMsg = (props) => {
  const { enabled, type } = props;
  return (
    <ErrorWrapper enabled={enabled} type={type}>
      {props.msg}
    </ErrorWrapper>
  );
};

ErrorMsg.propTypes = {
  msg: PropTypes.string,
  enabled: PropTypes.bool,
  type: PropTypes.string,
};

export default ErrorMsg;
