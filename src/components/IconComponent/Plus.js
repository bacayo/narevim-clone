import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgPlus = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 747 747"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M712 338.333H408.667V35a35.006 35.006 0 0 0-17.5-30.312 35.01 35.01 0 0 0-35 0A35.006 35.006 0 0 0 338.667 35v303.333H35.333a35.006 35.006 0 0 0-30.312 17.5 35.01 35.01 0 0 0 0 35 35.006 35.006 0 0 0 30.312 17.5h303.334v303.334a35.007 35.007 0 0 0 17.5 30.312 35.01 35.01 0 0 0 35 0 35.007 35.007 0 0 0 17.5-30.312V408.333H712a35.007 35.007 0 0 0 30.312-17.5 35.01 35.01 0 0 0 0-35 35.007 35.007 0 0 0-30.312-17.5Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgPlus;
