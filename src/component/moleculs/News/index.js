import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const News = ({title, date, image}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperText}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.day}>{date}</Text>
      </View>
      <Image source={{uri: image}} style={styles.wrapperPicture} />
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
  wrapperPicture: {
    width: 80,
    height: 60,
    borderRadius: 10,
  },
});
