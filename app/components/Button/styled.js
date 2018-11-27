import styled from 'styled-components';
import { mainRed, darkerRed, white, lightGrey } from '../../utils/colors';
import { device } from '../../utils/styleHelper';

export const StyledButton = styled.button`
  color: ${white};
  font-family: Azo-Sans;
  background-color: ${({ disabled }) => disabled ? `${lightGrey}` : `${mainRed}`};
  text-transform: uppercase;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-align: center;
  vertical-align: middle;
  line-height: 50px;
  font-weight: 300;
  font-size: 14px;
  margin: 12px 20px 0;
  height: 45px;
  @media ${device.tabletP} {
    font-size: 20px;
    min-width: 149px;
    margin: 0;
    height: 50px;
    font-size: 16px;
  }
  @media ${device.tabletL} {
    margin: 0 0 0 10px;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  &:hover {
    opacity: 0.5;
    background: ${darkerRed}
  }
`;
