import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {IconNext} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListChat = ({imgProfile, doctorName, lastMessages, type, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={imgProfile} style={styles.avatar} />
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{doctorName}</Text>
        <Text style={styles.chat}>{lastMessages}</Text>
      </View>
      {type === 'list-doctor' && <IconNext />}
    </TouchableOpacity>
  );
};

export default ListChat;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.border.default,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    marginBottom: 4,
  },
  chat: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.disabled,
  },
});
