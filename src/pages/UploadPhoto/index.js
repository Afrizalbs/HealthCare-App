import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Header, Button, Link} from '../../component';
import {ILNullProfile, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapper}>
            <Image source={ILNullProfile} style={styles.avatar} />
            <IconAddPhoto style={styles.add} width={30} height={30} />
          </View>
          <Text style={styles.name}>wahid dwipa baskoro</Text>
          <Text style={styles.job}>Product Manager</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <View style={styles.space(30)} />
          <Link title="Skip for this" align="center" fontsize={16} />
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
    padding: 40,
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
    borderWidth: 1,
    borderColor: colors.border.default,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  avatar: {
    width: 110,
    height: 110,
  },
  add: {
    position: 'absolute',
    right: 5,
    bottom: 7,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  job: {
    fontSize: 18,
    color: colors.text.disabled,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
  },
  space: (x) => ({
    height: x,
  }),
});
export default UploadPhoto;
