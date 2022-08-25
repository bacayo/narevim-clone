import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgAddress = props => (
  <Svg
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    viewBox="0 0 24 24"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className=""
    {...props}>
    <Path d="M12 0C7 0 3 4 3 9c0 6.2 3.4 11.7 8.5 14.9.3.2.7.2 1.1 0 5-3.3 8.4-8.7 8.4-14.9 0-5-4-9-9-9zm0 13c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
  </Svg>
);

export default SvgAddress;
