import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button} from '../../component';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo width={110} height={120} />
      <View style={styles.space(40)} />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <View style={styles.space(50)} />
      <Input label="Email Address" />
      <View style={styles.space(28)} />
      <Input label="Password" secureTextEntry={true} />
      <View style={styles.space(15)} />
      <Link title="Forgot My Password" fontsize={16} />
      <View style={styles.space(50)} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <View style={styles.space(40)} />
      <Link title="Create New Account" fontsize={22} align="center" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 50,
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 35,
    color: '#112340',
  },
  space: (x) => ({
    height: x,
  }),
});
export default Login;
