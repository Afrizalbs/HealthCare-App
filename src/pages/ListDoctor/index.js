import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {ILNullProfile} from '../../assets';
import {Header, List} from '../../component';
import {FireBase} from '../../config';

const ListDoctor = ({navigation, route}) => {
  const itemCategory = route.params;
  const [listDoctor, setListDoctor] = useState([]);
  useEffect(() => {
    callDoctorByCategory(itemCategory.category);
  }, [itemCategory.category]);

  const callDoctorByCategory = (category) => {
    FireBase.database()
      .ref('doctors/')
      .orderByChild('category')
      .equalTo(category)
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          setListDoctor(data);
          // console.log('data dokter: ', data);
        }
      });
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#112340" barStyle="light-content" />
      <Header
        title={`pilih ${itemCategory.category}`}
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        {listDoctor.map((doctor) => {
          return (
            <List
              key={doctor.id}
              imgProfile={
                doctor.data.photo === undefined
                  ? ILNullProfile
                  : {
                      uri: doctor.data.photo,
                    }
              }
              doctorName={doctor.data.fullName}
              description={doctor.data.gender}
              type="list-doctor"
              onPress={() => navigation.navigate('DoctorProfile', doctor)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingVertical: 20,
    flex: 1,
  },
});
