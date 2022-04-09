import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Header, Input, Loading} from '../../component';
import {FireBase} from '../../config';
import {fonts, showErrorMessage, storeData, useForm} from '../../utils';

export default function Register({navigation}) {
  // Custom useState for handle register form
  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    umur: '',
    tinggiBadan: '',
    beratBadan: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const sendEmailVerified = () => {
    FireBase.auth()
      .currentUser.sendEmailVerification()
      .then(() => {})
      .catch((err) => {
        const errorMessage = err.message;
        showErrorMessage(errorMessage);
      });
  };

  const onSubmit = () => {
    // Firebase auth
    setLoading(true);
    FireBase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        sendEmailVerified();
        // mengirim database user di firebase
        const data = {
          fullName: form.fullName,
          pekerjaan: form.pekerjaan,
          umur: form.umur,
          tinggiBadan: form.tinggiBadan,
          beratBadan: form.beratBadan,
          email: form.email,
          uid: success.user.uid,
        };
        FireBase.database()
          .ref('users/' + success.user.uid + '/')
          .set(data);

        // mengirim data user ke localstorage device
        storeData('user', data);
        // mengarahkan ke halaman upload photo
        navigation.navigate('UploadPhoto', data);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setLoading(false);
        showErrorMessage(errorMessage);
      });
  };

  return (
    <>
      <SafeAreaView style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
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
            label="Umur (Tahun)"
            value={form.umur}
            keyboardType="numeric"
            onChangeText={(value) => setForm('umur', value)}
          />
          <View style={styles.space(24)} />
          <Input
            label="Tinggi Badan (cm)"
            value={form.tinggiBadan}
            keyboardType="numeric"
            onChangeText={(value) => setForm('tinggiBadan', value)}
          />
          <View style={styles.space(24)} />
          <Input
            label="Berat Badan (Kg)"
            value={form.beratBadan}
            keyboardType="numeric"
            onChangeText={(value) => setForm('beratBadan', value)}
          />
          <View style={styles.space(24)} />
          <Input
            label="Email Address"
            value={form.email}
            keyboardType="email-address"
            onChangeText={(value) => setForm('email', value)}
          />
          <View style={styles.space(24)} />
          <Input
            label="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => setForm('password', value)}
          />
          <Text style={styles.warningText}>
            Note: Setelah Registrasi anda akan mendapatkan kiriman link
            verifikasi melalui email, segera verifikasi email anda agar bisa
            login!
          </Text>
          <View style={styles.space(20)} />
          <Button title="Continue" onPress={onSubmit} />
          <View style={styles.space(20)} />
        </ScrollView>
      </SafeAreaView>
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
  warningText: {
    fontSize: 11,
    fontFamily: fonts.primary[600],
    color: 'red',
    marginTop: 5,
  },
});
