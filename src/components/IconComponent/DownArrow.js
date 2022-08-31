import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgDownArrow = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 711 430"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M1 75.707C1 56.295 8.469 37.628 22.65 22.69c29.12-29.12 76.907-29.12 106.027 0l226.987 226.24L582.651 21.944c29.12-29.12 76.906-29.12 106.026 0 29.12 29.12 29.12 76.907 0 106.027l-280 280c-14.188 14.188-32.854 21.65-53.016 21.65-20.161 0-38.828-8.213-53.016-21.65l-280-279.254C8.463 113.785.995 94.373.995 75.707H1Z"
      fill="#000"
    />
  </Svg>
);

export default SvgDownArrow;
