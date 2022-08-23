import {Key, User} from '.';
import React from 'react';

const icon = {
  key: Key,
  user: User,
};

export default function IconSvg(props) {
  const Icon = icon[props.name];
  return (
    <Icon width={props.width} height={props.height} stroke={props.stroke} />
  );
}
