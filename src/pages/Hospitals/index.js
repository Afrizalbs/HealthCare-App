import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {IlHospitalBG} from '../../assets';
import {ListHospital} from '../../component';
import {FireBase} from '../../config';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  const [hospital, setHospital] = useState([]);

  useEffect(() => {
    getHospital();
  }, []);

  const getHospital = () => {
    FireBase.database()
      .ref('hospital/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setHospital(filterData);
        }
      });
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={IlHospitalBG} style={styles.background}>
        <Text style={styles.title}>RS di Semarang</Text>
        <Text style={styles.text}>3 Tersedia</Text>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        {hospital.map((item) => {
          return (
            <ListHospital
              key={item.id}
              title={item.title}
              address={item.address}
              img={item.image}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  text: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    marginTop: 6,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
