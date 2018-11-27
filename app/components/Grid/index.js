import styled from 'styled-components';

const getWidthString = (span) => {
  const width = span / 12 * 100;
  if (!span) return 'width: 0%';
  return `width: ${width}%;`;
};

export const Row = styled.div`
  &::after {
    content: "";
    clear: both;
    display: table;
  }
`;

export const Column = styled.div`
  float: left;
  ${({ xxs }) => (xxs ? getWidthString(xxs) : 'width: 100%')};
  @media only screen and (min-width: 480px) {
    ${({ xs }) => xs && getWidthString(xs)};
  }
  @media only screen and (min-width: 768px) {
    ${({ sm }) => sm && getWidthString(sm)};
  }
  @media only screen and (min-width: 992px) {
    ${({ md }) => md && getWidthString(md)};
  }
  @media only screen and (min-width: 1280px) {
    ${({ lg }) => lg && getWidthString(lg)};
  }
`;
