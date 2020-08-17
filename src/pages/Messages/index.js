import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../component';
import {colors, fonts} from '../../utils';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';

const Messages = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      imgProfile: DummyDoctor1,
      doctorName: 'Nikita Marzani',
      description: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      imgProfile: DummyDoctor2,
      doctorName: 'Zulfikar Pradana',
      description: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      imgProfile: DummyDoctor3,
      doctorName: 'Monique Alexandre',
      description: 'Oke menurut bu dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        {doctors.map((chatKonsultasi) => {
          return (
            <List
              key={chatKonsultasi.id}
              imgProfile={chatKonsultasi.imgProfile}
              doctorName={chatKonsultasi.doctorName}
              description={chatKonsultasi.description}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
};
export default Messages;
const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.secondary,
    marginLeft: 16,
    marginBottom: 16,
  },
});
