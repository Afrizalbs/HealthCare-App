import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {ILLogo} from '../../assets';
import {Button, Input, Link} from '../../component';
import {FireBase} from '../../config';
import {fonts, showErrorMessage, storeData, useForm} from '../../utils';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const login = () => {
    dispatch({type: 'SET_LOADING', value: true});
    FireBase.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        dispatch({type: 'SET_LOADING', value: false});

        FireBase.database()
          .ref(`users/${success.user.uid}/`)
          .once('value')
          .then((resDB) => {
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((error) => {
        dispatch({type: 'SET_LOADING', value: false});
        showErrorMessage(error.message);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.space(40)} />
          <ILLogo width={86} height={75} />
          <View style={styles.space(40)} />
          <Text style={styles.text}>Masuk dan mulai berkonsultasi</Text>
          <View style={styles.space(40)} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={(value) => setForm('email', value)}
          />
          <View style={styles.space(24)} />
          <Input
            label="Password"
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          <View style={styles.space(10)} />
          <Link title="Forgot My Password" fontsize={12} />
          <View style={styles.space(40)} />
          <Button title="Sign In" onPress={login} />
          <View style={styles.space(30)} />
          <Link
            title="Create New Account"
            fontsize={16}
            align="center"
            onPress={() => navigation.navigate('Register')}
          />
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 40,
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
