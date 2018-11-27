import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitle,
  StyledInputLineWrapper,
  StyledHeadline,
  StyledDisclaimmer,
  FlexWrapper,
} from '../common/styled';

import Button from '../../Button';
import Checkbox from '../../Checkbox';
import TextInput from '../../TextInput';

import { isValidEmail } from '../../../utils/helpers';

class Step1 extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      email: '',
      isDirty: false,
    };
    this.onClaimerToggle = this.onClaimerToggle.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onNext = this.onNext.bind(this);
  }


  onClaimerToggle() {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      isDirty: true,
    });
  }

  onNext(e) {
    const { checked } = this.state;
    e.preventDefault();
    if (isValidEmail(this.state.email) && checked) {
      this.props.onSetCurrentStep(2);
      this.props.onSetEmail(this.state.email);
    }
  }

  render() {
    const { title, headline1, headline2, defaultEmail, defaultDirty } = this.props;
    const { checked, email, isDirty } = this.state;
    return (
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledHeadline>
          <span className="mobile-clear">{ headline1 }</span>
          <span>{ headline2 }</span>
        </StyledHeadline>

        <StyledInputLineWrapper>
          <FlexWrapper>
            <TextInput
              type="email"
              name="email"
              placeholder="enter email address"
              value={defaultEmail || email}
              isDirty={defaultDirty || isDirty}
              onChange={this.onInputChange}
            />
            <Button type="button" txt="next" onClick={this.onNext} />
          </FlexWrapper>
        </StyledInputLineWrapper>

        <StyledDisclaimmer>
          <Checkbox id="disclaimmer-checkbox" checked={checked} onChange={this.onClaimerToggle} />
          <span className="txt">
            {'I agree to receive information from Discovery Communications in accordance with the following '}
            <span className="underline">Privacy Policy</span>
          </span>
        </StyledDisclaimmer>
      </div>
    );
  }
}

Step1.propTypes = {
  title: PropTypes.string,
  headline1: PropTypes.string,
  headline2: PropTypes.string,
  onSetCurrentStep: PropTypes.func,
  onSetEmail: PropTypes.func,
  defaultEmail: PropTypes.string,
  defaultDirty: PropTypes.bool,
};

export default Step1;
