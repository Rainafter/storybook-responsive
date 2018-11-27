import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledTitle,
  StyledInputLineWrapper,
  StyledHeadline,

  FlexWrapper,
} from '../common/styled';

import { FlexInputsWrapper } from './styled';
import Button from '../../Button';
import TextInput from '../../TextInput';
import { isValidString } from '../../../utils/helpers';

class Step2 extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      isFirstNameDirty: false,
      isLastNameDirty: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(e) {
    if (e.target.name === 'firstName') {
      this.setState({
        isFirstNameDirty: true,
        [e.target.name]: e.target.value,
      });
    } else if (e.target.name === 'lastName') {
      this.setState({
        isLastNameDirty: true,
        [e.target.name]: e.target.value,
      });
    }
  }

  onSubmit(e) {
    const { firstName, lastName } = this.state;
    e.preventDefault();
    this.setState({
      isFirstNameDirty: true,
      isLastNameDirty: true,
    });
    if (isValidString(firstName) && isValidString(lastName)) {
      this.props.onSetNames({
        firstName,
        lastName,
      });
      this.props.onSetCurrentStep(3);
    }
  }

  render() {
    const { title, headline, defaultFullName, defaultClick } = this.props;
    const { firstName, lastName, isFirstNameDirty, isLastNameDirty } = this.state;
    return (
      <div>
        <StyledTitle>{title}</StyledTitle>
        <StyledHeadline>{ headline }</StyledHeadline>
        <StyledInputLineWrapper>
          <FlexWrapper>
            <FlexInputsWrapper>
              <TextInput
                type="text"
                name="firstName"
                placeholder="First Name"
                value={(!!defaultFullName && defaultFullName.firstName) || firstName}
                onChange={() => this.onInputChange(defaultClick)}
                layout="half"
                isRequired
                isFirstNameDirty={isFirstNameDirty}
                isLastNameDirty={isLastNameDirty}
              />
              <TextInput
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={(!!defaultFullName && defaultFullName.lastName) || lastName}
                onChange={() => this.onInputChange(defaultClick)}
                layout="half"
                isRequired
                isFirstNameDirty={isFirstNameDirty}
                isLastNameDirty={isLastNameDirty}
              />
            </FlexInputsWrapper>
            <Button type="submit" txt="Sign up" onClick={this.onSubmit} />
          </FlexWrapper>
        </StyledInputLineWrapper>
      </div>
    );
  }
}

Step2.propTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  fullName: PropTypes.shape({
    lastName: PropTypes.string,
    firstName: PropTypes.string,
  }),
  email: PropTypes.shape({
    value: PropTypes.string,
  }),
  onSetCurrentStep: PropTypes.func,
  onSetNames: PropTypes.func,
  defaultFullName: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default Step2;
