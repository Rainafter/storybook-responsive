import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { StyledInput, StyledInputHalf, TextInputWrapper, TextInputHalfWrapper } from './styled';
import ErrorMsg from '../ErrorMsg';
import { isValidEmail } from '../../utils/helpers';

const TextInput = (props) => {
  const { type, name, value, onChange, placeholder, layout, isRequired, isDirty, isFirstNameDirty, isLastNameDirty } = props;
  console.log('~~~~~~~~~~>_.isEmpty(value)', _.isEmpty(value));
  console.log('~~~~~~~~~~>!!isFirstNameDirty || !!isLastNameDirty', !!isFirstNameDirty || !!isLastNameDirty);
  console.log('~~~~~~~~~~>isRequired', isRequired);

  console.log('~~~~~~~~~~>(!!isFirstNameDirty || !!isLastNameDirty) && isRequired && _.isEmpty(value)', (!!isFirstNameDirty || !!isLastNameDirty) && isRequired && _.isEmpty(value));
  if (layout !== 'half') {
    return (
      <TextInputWrapper>
        {
          (!!isFirstNameDirty || !!isLastNameDirty) && isRequired && _.isEmpty(value) && <ErrorMsg enabled={isRequired && _.isEmpty(value)} msg="REQUIRED" />
        }
        {
          !!isDirty && type === 'email' && !isValidEmail(value) && <ErrorMsg enabled={!isValidEmail(value)} msg="EMAIL FORMAT IS INVALID." />
        }
        <StyledInput
          type="text"
          name={name}
          placeholder={placeholder || ''}
          value={value}
          onChange={onChange}
          layout={layout}
          {...props}
        />
      </TextInputWrapper>
    );
  }
  return (
    <TextInputHalfWrapper>
      {
        (!!isFirstNameDirty || !!isLastNameDirty || !!isDirty) && isRequired && _.isEmpty(value) && <ErrorMsg enabled={isRequired && _.isEmpty(value)} msg="REQUIRED" type="half" />
      }
      <StyledInputHalf
        type={type || 'text'}
        name={name}
        placeholder={placeholder || ''}
        value={value}
        onChange={onChange}
        layout={layout}
        {...props}
      />
    </TextInputHalfWrapper>
  );
};

TextInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  layout: PropTypes.string,
  isRequired: PropTypes.bool,
  isDirty: PropTypes.bool,
};

export default TextInput;
