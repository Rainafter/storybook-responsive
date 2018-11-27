import styled from 'styled-components';
import { green, lightBlue, mediumGrey } from '../../../utils/colors';
import { device, offset } from '../../../utils/styleHelper';


export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media ${device.tabletP} {
    font-size: 24px;
    flex-direction: row;
    align-items: center;
  }
  @media ${device.tabletL} {
    margin: 0;
    justify-content: flex-start;
  }
  @media ${device.laptop} {
  }
`;

export const StyledInputLineWrapper = styled.div`
  display: block;
`;

export const StyledTitle = styled.div`
  font-family: Elaine;
  font-size: 36px;
  color: ${green};
  padding: 26px 0 0px;
  @media ${device.tabletP} {
    font-size: 50px;
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

export const StyledHeadline = styled.div`
  font-family: Azo-Sans-Bold;
  color: ${lightBlue};
  padding: 4px 20px 12px 0;
  margin: 0 20px;
  font-size: 16px;
  @media ${device.tabletP} {
    font-size: 20px;
    padding: 4px 20px 12px 0;
  }
  @media ${device.tabletL} {
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
`;

export const StyledDisclaimmer = styled.div`
  display: block;
  font-size: 12px;
  font-family: Azo-Sans-Light;
  color: ${mediumGrey};
  margin: 8px 20px;
  max-width: 370px;
  @media ${device.tabletP} {
    margin: 8px auto;
    max-width: 529px;
  }
  @media ${device.tabletL} {
    margin: 8px 0;
  }
  .txt {
    line-height: 15px;
    display: block;
    text-align: left;
    padding: 3px 0 0 30px;
    @media ${device.tabletP} {
      width: 380px;
      padding: 2px 0 0 20px;
    }
    @media ${device.tabletL} {
    }
  }
`;
