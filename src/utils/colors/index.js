const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  grey1: '#7D8797',
  grey2: '#e9e9e9',
  grey3: '#8092AF',
  grey4: '#EDEEF0',
  blue1: '#0066CB',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,

  text: {
    default: mainColors.dark1,
    disabled: mainColors.grey1,
    menuNoActive: mainColors.dark2,
    menuActive: mainColors.green1,
    desc: mainColors.grey3,
  },
  border: {
    default: mainColors.grey2,
    onFocus: mainColors.blue1,
  },
  card: {
    bgDefault: mainColors.green2,
  },
  input: {
    bgDefault: mainColors.grey4,
  },
  button: {
    sendActive: mainColors.blue1,
    sendDisable: mainColors.grey4,
  },
};
