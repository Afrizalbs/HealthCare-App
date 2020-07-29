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
import {colors} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? (
        <IconDoctorActive width={30} height={30} />
      ) : (
        <IconDoctorNoActive width={30} height={30} />
      );
    }
    if (title === 'Messages') {
      return active ? (
        <IconMessagesActive width={30} height={30} />
      ) : (
        <IconMessagesNoActive width={30} height={30} />
      );
    }
    if (title === 'Hospitals') {
      return active ? (
        <IconHospitalActive width={30} height={30} />
      ) : (
        <IconHospitalNoActive width={30} height={30} />
      );
    }
    return <IconDoctorNoActive width={30} height={30} />;
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
    fontFamily: 'Nunito-SemiBold',
    fontSize: 15,
    color: active ? colors.text.menuActive : colors.text.menuNoActive,
    textAlign: 'center',
    marginTop: 4,
  }),
});
