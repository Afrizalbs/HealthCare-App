import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button} from '../../component';
import {fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo width={86} height={75} />
      <View style={styles.space(40)} />
      <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
      <View style={styles.space(40)} />
      <Input label="Email Address" />
      <View style={styles.space(24)} />
      <Input label="Password" secureTextEntry={true} />
      <View style={styles.space(10)} />
      <Link title="Forgot My Password" fontsize={12} />
      <View style={styles.space(40)} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <View style={styles.space(30)} />
      <Link title="Create New Account" fontsize={16} align="center" />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: '#112340',
    maxWidth: 153,
  },
  space: (x) => ({
    height: x,
  }),
});
export default Login;
