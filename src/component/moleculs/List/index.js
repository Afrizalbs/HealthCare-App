import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {
  IconNext,
  IconEditProfile,
  IconLanguage,
  IconGiveUsRate,
  IconHelp,
} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const List = ({imgProfile, doctorName, description, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'give-rate') {
      return <IconGiveUsRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? <Icon /> : <Image source={imgProfile} style={styles.avatar} />}
      <View style={styles.textWrapper}>
        <Text style={styles.name}>{doctorName}</Text>
        <Text style={styles.desc}>{description}</Text>
      </View>
      {type === 'list-doctor' && <IconNext />}
    </TouchableOpacity>
  );
};

export default List;

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
  },
  textWrapper: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.secondary,
    marginBottom: 4,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.disabled,
  },
});
