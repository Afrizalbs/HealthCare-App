import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {FireBase} from '../../config';
import {fonts} from '../../utils';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    const session = FireBase.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          console.log(user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => session();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo width={86} height={75} />
      <Text style={styles.title}>My Dokter</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    lineHeight: 27,
    color: '#112340',
    marginTop: 20,
  },
});
export default Splashscreen;
