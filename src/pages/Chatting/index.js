import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, BubbleChat, InputChat} from '../../component';
import {fonts, colors} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header type="HeaderProfile" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
        <BubbleChat IsUser />
        <BubbleChat />
        <BubbleChat IsUser />
      </View>
      <View style={styles.inputWrapper}>
        <InputChat />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.disabled,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputWrapper: {
    padding: 16,
  },
});
