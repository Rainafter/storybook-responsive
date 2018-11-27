import styled from 'styled-components';
import { device } from '../../../utils/styleHelper';

export const FlexInputsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
  @media ${device.tabletP} {
    margin: 0;
  }
`;
