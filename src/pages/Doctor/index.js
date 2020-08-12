import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Profile, Categoris, TopRated, News} from '../../component';
import {colors, fonts} from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

export default function Doctor({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.space(30)} />
          <View style={styles.wrapperSection}>
            <Profile />
            <View style={styles.space(30)} />
            <Text style={styles.label}>
              Mau konsultasi dengan siapa hari ini?
            </Text>
          </View>
          <View style={styles.space(16)} />
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <View style={styles.gap(32)} />
                {JSONCategoryDoctor.data.map((listDoctorCategory) => {
                  return (
                    <Categoris
                      key={listDoctorCategory.id}
                      category={listDoctorCategory.category}
                      onPress={() => navigation.navigate('ListDoctor')}
                    />
                  );
                })}
                <View style={styles.gap(22)} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.space(30)} />
          <View style={styles.wrapperSection}>
            <Text style={styles.label2}>Top Rated Doctor</Text>
            <View style={styles.space(16)} />
            <TopRated />
            <TopRated />
            <TopRated />
            <View style={styles.space(20)} />
            <Text style={styles.label2}>Today News</Text>
          </View>
          <News />
          <News />
          <News />
          <View style={styles.space(15)} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapperSection: {
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    maxWidth: 220,
    color: colors.text.default,
  },
  label2: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    maxWidth: 320,
    color: colors.text.default,
  },
  wrapperScroll: {
    marginHorizontal: -16,
  },
  category: {
    flexDirection: 'row',
  },
  space: (x) => ({
    height: x,
  }),
  gap: (y) => ({
    width: y,
  }),
});
