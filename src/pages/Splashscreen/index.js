import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splashscreen = () => {
  return (
    <View style={styles.page}>
      <ILLogo width={110} height={110} />
      <Text style={styles.title}>My Dokter</Text>
    </View>
  );
};

export default Splashscreen;
const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 27,
    color: '#112340',
    marginTop: 20,
  },
});
