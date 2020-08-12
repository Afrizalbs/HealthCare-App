import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  IlHospitalBG,
  DummyHospital1,
  DummyHospital3,
  DummyHospital2,
} from '../../assets';
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
        <ListHospital
          title="Rumah Sakit
          Citra Bunga Merdeka"
          address="Jln. Surya Sejahtera 20"
          img={DummyHospital1}
        />
        <ListHospital
          title="Rumah Sakit Anak 
          Happy Family & Kids"
          address="Jln. mawar 21"
          img={DummyHospital2}
        />
        <ListHospital
          title="Rumah Sakit Jiwa 
          Tingkatan Paling Atas"
          address="Jln. diponegoro no.521"
          img={DummyHospital3}
        />
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
