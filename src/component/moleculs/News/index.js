import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {DummyNews1} from '../../../assets';

const News = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperText}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.day}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.dummyPicture} />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
    marginTop: 16,
  },
  wrapperText: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.secondary,
    maxWidth: '90%',
  },
  day: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.disabled,
  },
  dummyPicture: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
