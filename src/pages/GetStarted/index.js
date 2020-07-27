import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {Button} from '../../component';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo width={110} height={120} />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <View style={styles.gap(20)} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 50,
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Nunito-SemiBold',
    marginTop: 91,
    color: '#FFF',
  },
  gap: (x) => ({
    height: x,
  }),
});
export default GetStarted;
