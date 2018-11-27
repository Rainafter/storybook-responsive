import styled from 'styled-components';
import { footerPurple, lightBlue, mediumGrey, green } from '../../utils/colors';
import { device, offset } from '../../utils/styleHelper';

export const StyledFooterWrapper = styled.div`
  display: block;
  width: 100%;
  height: 300px;
  text-align: center;
  background-color: ${footerPurple};
  @media ${device.tabletP} {
    height: 240px;
  }
  @media ${device.tabletL} {
    text-align: left;
    height: 212px;
  }
  @media ${device.laptop} {
    height: 212px;
  }
`;

export const StyledContent = styled.div`
  position: relative;
  margin: 0 auto;
  @media ${device.tabletP} {
  }
  @media ${device.tabletL} {
    position: absolute;
    left: 50%;
    top: 40px;
    width: 100%;
    transform: translateX(${offset.tabletL / 2}px);

  }
  @media ${device.laptop} {
    transform: translateX(${offset.laptop / 2}px);
  }
`;

export const HeadLine1 = styled.div`
  font-family: Azo-Sans-Bold;
  color: ${lightBlue};
  padding: 8px 20px;
  text-transform: capitalize;
  font-size: 24px;
  max-width: 264px;
  margin: 0 auto;
  @media ${device.tabletP} {
    font-size: 28px;
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
  }
  @media ${device.laptop} {
    font-size: 26px;
  }
`;


export const FlexInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
  @media ${device.tabletP} {
    margin: 0;
  }
`;
//------
//------
//------
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

export const StyledHeadline = styled.div`
  font-family: Azo-Sans-Bold;
  color: ${lightBlue};
  padding: 8px 20px;
  margin: 0 auto;
  font-size: 16px;
  @media ${device.tabletP} {
    font-size: 20px;
    padding: 8px 20px 8px 0;
  }
  @media ${device.tabletL} {
  }
  @media ${device.laptop} {
    font-size: 24px;
  }
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
