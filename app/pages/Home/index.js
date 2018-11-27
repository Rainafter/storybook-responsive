/**
 * Home
 */

// import React, { PureComponent } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';

import {
  makeSelectStep1,
  makeSelectStep2,
  makeSelectStep3,
  makeSelectStep,
  makeSelectFullName,
  makeSelectEmail,
} from './selectors';


import Footer from '../../components/Footer';

import reducer from './reducer';

const Home = (props) => {
  const { step1, step2, step3, step, fullName, email } = props;
  return (
    <div>
      <Footer
        step1={step1}
        step2={step2}
        step3={step3}
        step={step}
        fullName={fullName}
        email={email}
      />
    </div>
  );
};

Home.propTypes = {
  step1: PropTypes.shape({}),
  step2: PropTypes.shape({}),
  step3: PropTypes.shape({}),
  step: PropTypes.number,
  fullName: PropTypes.shape({}),
  email: PropTypes.shape({}),
};

const mapStateToProps = createStructuredSelector({
  step: makeSelectStep(), // returns the current step
  step1: makeSelectStep1(),
  step2: makeSelectStep2(),
  step3: makeSelectStep3(),
  fullName: makeSelectFullName(),
  email: makeSelectEmail(),
});


const withConnect = connect(
  mapStateToProps,
  null
);

const withReducer = injectReducer({ key: 'home', reducer });


export default compose(
  withReducer,
  withConnect,
)(Home);
