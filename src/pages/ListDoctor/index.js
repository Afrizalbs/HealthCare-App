import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListChat} from '../../component';
import {DummyDoctor5} from '../../assets';

const ListDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Pilih Dokter"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ListChat
          imgProfile={DummyDoctor5}
          doctorName="Lana Rhoades"
          lastMessages="Wanita"
          type="list-doctor"
          onPress={() => navigation.navigate('Chatting')}
        />
        <ListChat
          imgProfile={DummyDoctor5}
          doctorName="Lana Rhoades"
          lastMessages="Wanita"
          type="list-doctor"
        />
        <ListChat
          imgProfile={DummyDoctor5}
          doctorName="Lana Rhoades"
          lastMessages="Wanita"
          type="list-doctor"
        />
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
