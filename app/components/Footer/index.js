import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';

import {
  StyledFooterWrapper,
  StyledContent,
} from './styled';

import { submitForm, setStep, setEmail, setName } from '../../pages/Home/actions';
import reducer from '../../pages/Home/reducer';

import Step1 from '../steps/step1';
import Step2 from '../steps/step2';
import Step3 from '../steps/step3';

class Footer extends PureComponent {
  constructor() {
    super();
    this.onSetCurrentStep = this.onSetCurrentStep.bind(this);
    this.onSetEmail = this.onSetEmail.bind(this);
    this.onSetNames = this.onSetNames.bind(this);
  }

  onSetCurrentStep(num) {
    this.props.dispatchSetStep(num);
  }

  onSetEmail(email) {
    this.props.dispatchSetEmail(email);
  }

  onSetNames(name) {
    this.props.dispatchSetName(name);
  }

  render() {
    const { step1, step2, step3, step, fullName, email } = this.props;
    return (
      <StyledFooterWrapper>
        <StyledContent>
          <form id="subscribe-form">
            { step === 1 && (
              <Step1
                title={step1.title}
                headline1={step1.headline1}
                headline2={step1.headline2}
                onSetCurrentStep={this.onSetCurrentStep}
                onSetEmail={this.onSetEmail}
                isRequired
              />
            )}
            { step === 2 && (
              <Step2
                title={step2.title}
                headline={step2.headline}
                fullName={fullName}
                email={email}
                onSetCurrentStep={this.onSetCurrentStep}
                onSetNames={this.onSetNames}
              />
            )}
            { step === 3 && (
              <Step3
                title={step3.title}
                headline1={step3.headline1}
                headline2={step3.headline2}
              />
            )}
          </form>
        </StyledContent>
      </StyledFooterWrapper>
    );
  }
}

Footer.propTypes = {
  step: PropTypes.number,
  step1: PropTypes.shape({
    title: PropTypes.string,
  }),
  step2: PropTypes.shape({
    title: PropTypes.string,
    headline: PropTypes.string,
  }),
  step3: PropTypes.shape({}),
  fullName: PropTypes.shape({}),
  email: PropTypes.shape({}),
  dispatchSetStep: PropTypes.func,
  dispatchSetEmail: PropTypes.func,
  dispatchSetName: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  dispatchSubmitForm: data => dispatch(submitForm(data)),
  dispatchSetStep: step => dispatch(setStep(step)),
  dispatchSetEmail: email => dispatch(setEmail(email)),
  dispatchSetName: name => dispatch(setName(name)),
});

const withReducer = injectReducer({ key: 'home', reducer });
const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(
  withReducer,
  withConnect,
)(Footer);
