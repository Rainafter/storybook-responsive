import styled from 'styled-components';
import { white, borderGrey, lightGrey } from '../../utils/colors';
import { device } from '../../utils/styleHelper';

export const StyledLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  .checkmark {
    position: absolute;
    left: 10px;
    top: 2px;
    height: 12px;
    width: 12px;
    border: 1px solid ${borderGrey};
    border-radius: 3px;
    background-color: ${white};
    @media ${device.tabletP} {
      top: 0;
      left: 0;
    }
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
    &:hover {
      background: ${lightGrey};
    }
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked ~ .checkmark {
    &:after {
      display: block;
      left: 3px;
      top: -1px;
      width: 5px;
      height: 9px;
      border: solid black;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);

    }
  }
`;
