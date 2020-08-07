import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconDoctorNoActive,
  IconMessagesNoActive,
  IconHospitalNoActive,
  IconDoctorActive,
  IconMessagesActive,
  IconHospitalActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctorNoActive />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessagesNoActive />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospitalNoActive />;
    }
    return <IconDoctorNoActive />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title} </Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: (active) => ({
    fontFamily: fonts.primary[600],
    fontSize: 10,
    color: active ? colors.text.menuActive : colors.text.menuNoActive,
    textAlign: 'center',
    marginTop: 3,
  }),
});
