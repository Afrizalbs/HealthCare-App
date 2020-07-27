import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, Input, Button} from '../../component';

export default function Register({navigation}) {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <View style={styles.space(28)} />
        <Input label="Pekerjaan" />
        <View style={styles.space(28)} />
        <Input label="Email Address" />
        <View style={styles.space(28)} />
        <Input label="Password" />
        <View style={styles.space(70)} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {
    padding: 50,
    paddingTop: 0,
    backgroundColor: 'white',
  },
  space: (x) => ({
    height: x,
  }),
});
