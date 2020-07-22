import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../utils';

const GetStarted = () => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo width={110} height={110} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button title="Get Started" />
        <View style={{height: 20}} />
        <Button type="secondary" title="Sign In" />
      </View>
    </ImageBackground>
  );
};
export default GetStarted;
const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontWeight: '600',
    marginTop: 91,
    color: '#FFF',
  },
});
