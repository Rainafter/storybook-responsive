import styled from 'styled-components';
import { device } from '../../utils/styleHelper';
import { mainRed } from '../../utils/colors';

export const ErrorWrapper = styled.div`
  font-size: 8px;
  font-family: Azo-Sans-Light;
  color: ${mainRed};
  opacity: ${({ enabled }) => enabled ? 1 : 0};
  padding-bottom: 8px;
  text-align: left;
  position: absolute;
  top: -12px;
  margin: ${({ type }) => type === 'half' ? '0' : '0 20px'};
  @media ${device.tabletP} {
    font-size: 10px;
    margin: 0 20px 0 0;
    padding-bottom: 4px;
  }
  @media ${device.tabletL} {
  }
  @media ${device.laptop} {
  }
`;
