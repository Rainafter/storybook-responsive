// needed for redux-saga es6 gen support
import '@babel/polyfill';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

import Step1 from '../components/steps/step1';
import Step2 from '../components/steps/step2';
import Step3 from '../components/steps/step3';
import { StyledFooterWrapper, StyledContent } from '../components/Footer/styled';
import GlobalStyle from '../global-styles';

const step1 = {
  headline1: 'SIGN UP FOR',
  headline2: 'THE TLC NEWSLETTER',
  title: 'join the list',
};

const step2 = {
  headline: 'ALMOST DONE! PLEASE ENTER YOUR FIRST AND LAST NAME.',
  title: 'join the list',
};

const step3 = {
  headline1: 'Thank You For Signing Up!',
  headline2: 'Look out for the latest news on your favorite shows.',
  title: 'congratulations!',
};


storiesOf('Interactive Steps', module)
  .add('Step1', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step1
            title={step1.title}
            headline1={step1.headline1}
            headline2={step1.headline2}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ))
  .add('Step2', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step2
            title={step2.title}
            headline={step2.headline}
            fullName={{ firstName: 'Chloe', lastName: 'G' }}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ))
  .add('Step3', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step3
            title={step3.title}
            headline1={step3.headline1}
            headline2={step3.headline2}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ));

storiesOf('States - Email Collection', module)
  .add('Default Valid Email', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step1
            title={step1.title}
            headline1={step1.headline1}
            headline2={step1.headline2}
            defaultEmail="xingyi@gmail.com"
            onSetCurrentStep={() => {}}
            onSetEmail={() => {}}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ))
  .add('Invalid Email', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step1
            title={step1.title}
            headline1={step1.headline1}
            headline2={step1.headline2}
            defaultDirty
            defaultEmail="wrongemail"
            onSetCurrentStep={() => {}}
            onSetEmail={() => {}}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ))
  .add('Empty Email', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step1
            title={step1.title}
            headline1={step1.headline1}
            headline2={step1.headline2}
            defaultDirty
            defaultEmail=""
            onSetCurrentStep={() => {}}
            onSetEmail={() => {}}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ));

storiesOf('States - Name Collection', module)
  .add('Default Valid Name', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step2
            title={step2.title}
            headline={step2.headline}
            defaultFullName={{ firstName: 'Chloe', lastName: 'G' }}
            onSetCurrentStep={() => {}}
            onSetNames={() => {}}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ));
storiesOf('States - Success', module)
  .add('Success', () => (
    <div>
      <GlobalStyle />
      <StyledFooterWrapper>
        <StyledContent>
          <Step3
            title={step3.title}
            headline1={step3.headline1}
            headline2={step3.headline2}
          />
        </StyledContent>
      </StyledFooterWrapper>
    </div>
  ));

storiesOf('Button', module)
  .add('Next', () => <Button type="button" txt="next" />)
  .add('SignUp', () => <Button type="button" txt="sign up" />);
