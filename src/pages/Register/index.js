import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Input, Button, Loading} from '../../component';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm, colors} from '../../utils';
import {FireBase} from '../../config';
import {showMessage, hideMessage} from 'react-native-flash-message';

export default function Register({navigation}) {
  // Custom useState for handle register form
  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    // Firebase auth
    setLoading(true);
    FireBase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        console.log('Register sukses: ', success);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: 'Upss!!',
          description: errorMessage,
          type: 'default',
          backgroundColor: colors.error, // background color
          color: 'white', // text color
        });
        console.log('Register gagal: ', errorMessage);
      });
    console.log(form);
    // () => navigation.navigate('UploadPhoto')
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={(value) => setForm('fullName', value)}
            />
            <View style={styles.space(24)} />
            <Input
              label="Pekerjaan"
              value={form.pekerjaan}
              onChangeText={(value) => setForm('pekerjaan', value)}
            />
            <View style={styles.space(24)} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <View style={styles.space(24)} />
            <Input
              label="Password"
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
            />
            <View style={styles.space(40)} />
            <Button title="Continue" onPress={onSubmit} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {
    padding: 40,
    paddingTop: 0,
    backgroundColor: 'white',
  },
  space: (x) => ({
    height: x,
  }),
});
