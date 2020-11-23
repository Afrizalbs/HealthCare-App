import React from 'react';

import User from './User';
import Doctor from './Doctor';

const BubbleChat = ({IsUser, message, timeSend, photo}) => {
  if (IsUser) {
    return <User message={message} timeSend={timeSend} />;
  }
  return <Doctor message={message} timeSend={timeSend} photo={photo} />;
};

export default BubbleChat;
