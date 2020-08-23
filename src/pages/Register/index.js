import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Input, Button} from '../../component';
import {ScrollView} from 'react-native-gesture-handler';
import {useForm} from '../../utils';

export default function Register({navigation}) {
  const [form, setForm] = useForm({
    fullName: '',
    pekerjaan: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log(form);
    // () => navigation.navigate('UploadPhoto')
  };

  return (
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
