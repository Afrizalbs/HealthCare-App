import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {IlHospitalBG} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../component';

export default function Hospitals() {
  return (
    <View style={styles.page}>
      <ImageBackground source={IlHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.text}>3 Available</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital />
        <ListHospital />
        <ListHospital />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
