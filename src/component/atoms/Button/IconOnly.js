import React from 'react';
import {IconBack, IconBackLight} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBack />;
    }
    if (icon === 'back-light') {
      return <IconBackLight />;
    }
    return <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
