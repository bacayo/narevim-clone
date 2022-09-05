import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgHeartEmpty = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 643 586"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M183.067.735C128.525.735 82.145 26.15 50.301 64.9 18.457 103.651.6 155.595.6 209.808c0 91.079 36.13 157.613 93.098 213.267 56.97 55.65 134.2 101.677 219.8 157.493l8.167 5.365 8.167-5.365c85.598-55.823 162.826-101.849 219.8-157.493 56.969-55.651 93.098-122.194 93.098-213.267 0-54.203-17.86-106.145-49.697-144.907C561.188 26.152 514.808.735 460.267.735c-62.016 0-111.151 29.458-138.6 53.432C294.213 30.193 245.083.735 183.067.735Zm0 29.864c58.661 0 109.317 34.729 127.864 53.666L321.665 95l10.734-10.735C350.946 65.328 401.607 30.6 460.263 30.6c45.339 0 82.656 20.562 109.667 53.432 27.011 32.869 42.932 78.188 42.932 125.765 0 83.407-31.073 139.867-84.235 191.8-51.349 50.161-124.453 95.036-206.96 148.64-82.51-53.599-155.613-98.473-206.973-148.64-53.161-51.927-84.23-108.391-84.23-191.8 0-47.579 15.927-92.896 42.933-125.765 27.01-32.87 64.328-53.432 109.666-53.432h.004Z"
      fill="#000"
    />
  </Svg>
);

export default SvgHeartEmpty;
