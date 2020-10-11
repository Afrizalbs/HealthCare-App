import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const showErrorMessage = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.error, // background color
    color: 'white', // text color
  });
};

export const showSuccessMessage = (message) => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary, // background color
    color: 'white', // text color})
  });
};
