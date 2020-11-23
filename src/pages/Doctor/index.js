import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Categoris, News, Profile, TopRated} from '../../component';
import {FireBase} from '../../config';
import {colors, fonts, getData, showErrorMessage} from '../../utils';

export default function Doctor({navigation}) {
  useEffect(() => {
    getData('user').then((result) => {
      console.log('data user: ', result);
    });
  }, []);

  const [news, setNews] = useState([]);
  const [categoryDoctor, setCategoryDoctor] = useState([]);
  const [topRatedDoctor, setTopRatedDoctor] = useState([]);
  useEffect(() => {
    // get data news
    FireBase.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);

          console.log('data news filter: ', filterData);
          setNews(filterData);
        }
      })
      .catch((error) => {
        showErrorMessage(error.message);
      });

    // get data kategori doctor
    FireBase.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);

          console.log('data category filter: ', filterData);
          setCategoryDoctor(res.val());
        }
      })
      .catch((error) => {
        showErrorMessage(error.message);
      });

    // get data top rated doctor
    FireBase.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          //  merubah data object dari firebase menjadi array
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          console.log('data top rated hasil parse: ', data);
          setTopRatedDoctor(data);
        }
      })
      .catch((error) => {
        showErrorMessage(error.message);
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
                {categoryDoctor.map((item) => {
                  return (
                    <Categoris
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ListDoctor', item)}
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
            {topRatedDoctor.map((doctor) => {
              return (
                <TopRated
                  key={doctor.id}
                  name={doctor.data.fullName}
                  desc={doctor.data.profession}
                  profilePicture={{uri: doctor.data.photo}}
                  onPress={() => navigation.navigate('DoctorProfile', doctor)}
                />
              );
            })}

            <View style={styles.space(20)} />
            <Text style={styles.label2}>Hot News</Text>
          </View>
          {news.map((item) => {
            return (
              <News
                key={item.id}
                title={item.title}
                date={item.date}
                image={item.image}
              />
            );
          })}

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
