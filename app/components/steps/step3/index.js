import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitle,
  HeadLine1,
  HeadLine2,
} from './styled';


const Step3 = (props) => {
  const { title, headline1, headline2 } = props;
  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      <HeadLine1>{headline1}</HeadLine1>
      <HeadLine2>{headline2}</HeadLine2>
    </div>
  );
};

Step3.propTypes = {
  title: PropTypes.string,
  headline1: PropTypes.string,
  headline2: PropTypes.string,
};

export default Step3;
