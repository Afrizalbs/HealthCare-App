import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
        console.log('data categori doctor: ', res.val());
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((item) => {
            data.push({
              id: item,
              data: oldData[item],
            });
          });
          console.log('data category hasil parse: ', data);
          setListDoctor(data);
        }
      });
  };

  return (
    <View style={styles.page}>
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
              imgProfile={{uri: doctor.data.photo}}
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
