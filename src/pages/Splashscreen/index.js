import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.page}>
      <ILLogo width={110} height={120} />
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
    fontSize: 25,
    fontFamily: 'Nunito-SemiBold',
    lineHeight: 27,
    color: '#112340',
    marginTop: 20,
  },
});
export default Splashscreen;
