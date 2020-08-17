import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyUser, IconDelPhoto} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MainProfile = ({name, desc}) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={DummyUser} style={styles.avatar} />
        <IconDelPhoto style={styles.deletePhoto} height={30} width={30} />
      </View>
      {name && (
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default MainProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    borderWidth: 1,
    borderColor: colors.border.default,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.secondary,
    marginTop: 16,
    marginBottom: 2,
    textAlign: 'center',
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.disabled,
    textAlign: 'center',
  },
  deletePhoto: {
    position: 'absolute',
    right: 6,
    bottom: 8,
  },
});
