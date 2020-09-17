import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Profile, Categoris, TopRated, News} from '../../component';
import {colors, fonts, getData} from '../../utils';
import {
  JSONCategoryDoctor,
  DummyDoctor1,
  DummyDoctor2,
  DummyDoctor3,
} from '../../assets';

export default function Doctor({navigation}) {
  useEffect(() => {
    getData('user').then((result) => {
      console.log('data user: ', result);
    });
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.space(30)} />
          <View style={styles.wrapperSection}>
            <Profile onPress={() => navigation.navigate('UserProfile')} />
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
            <TopRated
              name="Alex Rachel"
              desc="Pedriactician"
              profilePicture={DummyDoctor1}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <TopRated
              name="Sunny Frank"
              desc="Dentist"
              profilePicture={DummyDoctor2}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
            <TopRated
              name="Naomi Swan"
              desc="Chiropractic"
              profilePicture={DummyDoctor3}
              onPress={() => navigation.navigate('DoctorProfile')}
            />
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
