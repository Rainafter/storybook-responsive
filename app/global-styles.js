import { createGlobalStyle } from 'styled-components';


import AzoSansEot from 'assets/font/Azo-Sans/webfont.eot';
import AzoSansWoff from 'assets/font/Azo-Sans/webfont.woff';
import AzoSansTtf from 'assets/font/Azo-Sans/webfont.ttf';
import AzoSansSvg from 'assets/font/Azo-Sans/webfont.svg';

import AzoSansBoldEot from 'assets/font/Azo-Sans-Bold/webfont.eot';
import AzoSansBoldWoff2 from 'assets/font/Azo-Sans-Bold/webfont.woff2';
import AzoSansBoldWoff from 'assets/font/Azo-Sans-Bold/webfont.woff';
import AzoSansBoldTtf from 'assets/font/Azo-Sans-Bold/webfont.ttf';
import AzoSansBoldSvg from 'assets/font/Azo-Sans-Bold/webfont.svg';


import AzoSansBlackEot from 'assets/font/Azo-Sans-Black/webfont.eot';
import AzoSansBlackTtf from 'assets/font/Azo-Sans-Black/webfont.ttf';
import AzoSansBlackSvg from 'assets/font/Azo-Sans-Black/webfont.svg';
import AzoSansBlackWoff from 'assets/font/Azo-Sans-Black/webfont.woff';

import AzoSansLightEot from 'assets/font/Azo-Sans-Light/webfont.eot';
import AzoSansLightTtf from 'assets/font/Azo-Sans-Light/webfont.ttf';
import AzoSansLightSvg from 'assets/font/Azo-Sans-Light/webfont.svg';
import AzoSansLightWoff from 'assets/font/Azo-Sans-Light/webfont.woff';

import AzoSansMediumEot from 'assets/font/Azo-Sans-Medium/webfont.eot';
import AzoSansMediumTtf from 'assets/font/Azo-Sans-Medium/webfont.ttf';
import AzoSansMediumSvg from 'assets/font/Azo-Sans-Medium/webfont.svg';
import AzoSansMediumWoff from 'assets/font/Azo-Sans-Medium/webfont.woff';

import ElaineEot from 'assets/font/Elaine_D02/webfont.eot';
import ElaineTtf from 'assets/font/Elaine_D02/webfont.ttf';
import ElaineSvg from 'assets/font/Elaine_D02/webfont.svg';
import ElaineWoff from 'assets/font/Elaine_D02/webfont.woff';

import { device } from './utils/styleHelper';
/* eslint no-unused-expressions: 0 */

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Azo-Sans';
    src: url(${AzoSansEot}); /* IE9 Compat Modes */
    src: url(${AzoSansWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${AzoSansTtf})  format('truetype'), /* Safari, Android, iOS */
         url(${AzoSansSvg}#AzoSansSvg) format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Azo-Sans-Bold';
    src: url(${AzoSansBoldEot}); /* IE9 Compat Modes */
    src: url(${AzoSansBoldEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${AzoSansBoldWoff2}) format('woff2'), /* Super Modern Browsers */
         url(${AzoSansBoldWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${AzoSansBoldTtf}) format('truetype'), /* Safari, Android, iOS */
         url(${AzoSansBoldSvg}#AzoSansBoldSvg) format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Azo-Sans-Black';
    src: url(${AzoSansBlackEot}); /* IE9 Compat Modes */
    src: url(${AzoSansBlackEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${AzoSansBlackWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${AzoSansBlackTtf}) format('truetype'), /* Safari, Android, iOS */
         url(${AzoSansBlackSvg}#svgFontName) format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Azo-Sans-Light';
    src: url(${AzoSansLightEot}); /* IE9 Compat Modes */
    src: url(${AzoSansLightEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${AzoSansLightWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${AzoSansLightTtf})  format('truetype'), /* Safari, Android, iOS */
         url(${AzoSansLightSvg}#svgFontName) format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Azo-Sans-Medium';
    src: url(${AzoSansMediumEot}); /* IE9 Compat Modes */
    src: url(${AzoSansMediumEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${AzoSansMediumWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${AzoSansMediumTtf}) format('truetype'), /* Safari, Android, iOS */
         url(${AzoSansMediumSvg}#svgFontName) format('svg'); /* Legacy iOS */
  }

  @font-face {
    font-family: 'Elaine';
    src: url(${ElaineEot}); /* IE9 Compat Modes */
    src: url(${ElaineEot}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
         url(${ElaineWoff}) format('woff'), /* Pretty Modern Browsers */
         url(${ElaineTtf}) format('truetype'), /* Safari, Android, iOS */
         url(${ElaineSvg}#svgFontName) format('svg'); /* Legacy iOS */
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: 'HelveticaNeue', Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  input:focus {
    outline:none !important;
  }

  button:focus {
    outline:0;
  }

  #app {
    height: 100%;
    width: 100%;
    background-color: #FFF;
  }

  p,
  label {
    line-height: 1.5em;
  }

  .underline {
    text-decoration: underline;
  }
  .mobile-clear {
    clear: both;
    display: block;
    @media ${device.tabletP} {
      display: inline-block;
      padding: 0 5px 0 0;
    }
  }

`;

export default GlobalStyle;
