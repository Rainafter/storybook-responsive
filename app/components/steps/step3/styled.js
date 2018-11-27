import styled from 'styled-components';
import { lightBlue, green } from '../../../utils/colors';
import { device, offset } from '../../../utils/styleHelper';

export const HeadLine1 = styled.div`
  font-family: Azo-Sans-Bold;
  color: ${lightBlue};
  padding: 17px 20px;
  text-transform: capitalize;
  font-size: 24px;
  max-width: 264px;
  margin: 0 auto;
  @media ${device.tabletP} {
    font-size: 28px;
    padding: 17px 20px 5px 0;
    max-width: 400px;
  }
  @media ${device.tabletL} {
    margin: 0 0 0 80px;
    max-width: 600px;
  }
  @media ${device.laptop} {
    font-size: 32px;
  }
`;

export const HeadLine2 = styled.div`
  font-family: Azo-Sans-Light;
  color: ${lightBlue};
  padding: 8px 20px;
  text-transform: capitalize;
  font-size: 18px;
  margin: 0 auto;
  @media ${device.tabletP} {
    font-size: 20px;
    padding: 8px 0px;
  }
  @media ${device.tabletL} {
    margin: 0 0 0 80px;
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
`;

export const StyledTitle = styled.div`
  font-family: Elaine;
  font-size: 36px;
  color: ${green};
  padding: 60px 0 0px;
  @media ${device.tabletP} {
    font-size: 50px;
    padding: 20px 0 0px;
  }
  @media ${device.tabletL} {
    font-size: 60px;

    position: absolute;
    left: ${offset.tabletL}px;
  }
  @media ${device.laptop} {
    font-size: 80px;
    position: absolute;
    left: ${offset.laptop}px;
  }
`;
