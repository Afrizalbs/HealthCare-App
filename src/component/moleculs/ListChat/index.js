import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor3} from '../../../assets';
import {fonts, colors} from '../../../utils';

const ListChat = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor3} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.chat}>
          Baik bu, terima kasih banyak atas wakt...{' '}
        </Text>
      </View>
    </View>
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
    borderColor: '#EEEEEE',
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
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
