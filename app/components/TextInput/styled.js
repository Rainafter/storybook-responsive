import styled from 'styled-components';
import { lightPurple } from '../../utils/colors';
import { device } from '../../utils/styleHelper';

export const StyledInput = styled.input`
  background: ${lightPurple};
  padding-left: 20px;
  margin: 0 20px;
  border: none;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.4);
  font-family: Azo-Sans;
  font-size: 14px;
  height: 40px;
  @media ${device.tabletP} {
    font-size: 24px;
    width: 374px;
    margin: 0 20px 0 0;
    height: 45px;
  }
  @media ${device.laptop} {
    width: 480px;
    margin: 0 20px 0 0;
  }
`;


export const StyledInputHalf = styled.input`
  background: ${lightPurple};
  padding-left: 20px;
  border: none;
  border-radius: 5px;
  color: rgba(255, 255, 255, 0.4);
  font-family: Azo-Sans;
  font-size: 14px;
  height: 40px;
  width: 100%;
  @media ${device.tabletP} {
    font-size: 24px;
    margin: 0 20px 0 0;
    width: 182px;
    height: 45px;
  }
  @media ${device.laptop} {
    margin: 0 20px 0 0;
    width: 235px;
  }
`;

export const TextInputWrapper = styled.div`
  flex-direction: inherit;
  display: inherit;
  position: relative;
  @media ${device.tabletP} {
    display: inline;
  }
`;

export const TextInputHalfWrapper = styled.div`
  display: block;
  position: relative;
  width: 47%;
  overflow: hidden;
`;
