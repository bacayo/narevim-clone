import {
  Key,
  Mail,
  Phone,
  User,
  ArrowRight,
  Order,
  Address,
  Heart,
  LogOut,
  Location,
  Home,
  DownArrow,
  Back,
  Bin,
  Minus,
  Plus,
} from '.';
import React from 'react';

const icon = {
  key: Key,
  user: User,
  phone: Phone,
  mail: Mail,
  arrowRight: ArrowRight,
  order: Order,
  address: Address,
  heart: Heart,
  logout: LogOut,
  location: Location,
  home: Home,
  downArrow: DownArrow,
  back: Back,
  bin: Bin,
  minus: Minus,
  plus: Plus,
};

export default function IconSvg(props) {
  const Icon = icon[props.name];
  return (
    <Icon
      width={props.width}
      height={props.height}
      stroke={props.stroke}
      onPress={props.onPress}
    />
  );
}
