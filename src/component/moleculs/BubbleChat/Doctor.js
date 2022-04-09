import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';

const Doctor = ({message, photo, timeSend}) => {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.avatar} />
      <View style={styles.wrapper}>
        <View style={styles.chatWrapper}>
          <Text style={styles.desc}>{message}</Text>
        </View>
        <Text style={styles.date}>{timeSend}</Text>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatWrapper: {
    backgroundColor: colors.primary,
    padding: 5,
    paddingRight: 10,
    maxWidth: '100%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: 'white',
  },
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.disabled,
    marginTop: 8,
  },
});
