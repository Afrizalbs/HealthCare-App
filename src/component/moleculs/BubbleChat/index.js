import React from 'react';

import User from './User';
import Doctor from './Doctor';

const BubbleChat = ({IsUser}) => {
  if (IsUser) {
    return <User />;
  }
  return <Doctor />;
};

export default BubbleChat;
