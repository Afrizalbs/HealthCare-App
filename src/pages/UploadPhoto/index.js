import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Header, Button, Link} from '../../component';
import {ILNullProfile, IconAddPhoto} from '../../assets';
import {colors} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapper}>
            <Image source={ILNullProfile} style={styles.avatar} />
            <IconAddPhoto style={styles.add} width={50} height={50} />
          </View>
          <Text style={styles.name}>wahid dwipa baskoro</Text>
          <Text style={styles.job}>Product Manager</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <View style={styles.space(40)} />
          <Link title="Skip for this" align="center" fontsize={22} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 50,
    paddingTop: 0,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    borderWidth: 3,
    borderColor: colors.border.default,
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 36,
  },
  avatar: {
    width: 150,
    height: 150,
  },
  add: {
    position: 'absolute',
    right: 0,
    bottom: 5,
  },
  name: {
    fontSize: 30,
    fontFamily: 'Nunito-Regular',
    textTransform: 'capitalize',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  job: {
    fontSize: 20,
    color: colors.text.disabled,
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
  },
  space: (x) => ({
    height: x,
  }),
});
export default UploadPhoto;
