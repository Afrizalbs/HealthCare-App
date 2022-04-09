import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILNullProfile, ILStartChat} from '../../assets';
import {List} from '../../component';
import {FireBase} from '../../config';
import {colors, fonts, getData} from '../../utils';

const Messages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [lastChat, setLastChat] = useState([]);

  useEffect(() => {
    getDataFromLocal();

    const rootDB = FireBase.database().ref();
    const urlLastChat = `messages/${user.uid}/`;
    const messagesDB = rootDB.child(urlLastChat);
    messagesDB.on('value', async (snapshot) => {
      if (snapshot.val()) {
        const oldData = snapshot.val();
        const data = [];

        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUIDdoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUIDdoctor).once('value');
          // console.log('data doctor: ', detailDoctor.val());
          data.push({
            id: key,
            doctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        // console.log('data lastchat array: ', data);
        setLastChat(data);
      }
    });
  }, [user.uid]);

  const getDataFromLocal = () => {
    // mengambil data user dari local storage ⬇⬇⬇
    getData('user').then((res) => {
      setUser(res);
    });
  };
  if (lastChat.length === 0) {
    return (
      <View style={styles.page}>
        <View style={styles.content}>
          <Text style={styles.title}>Messages</Text>
          <View style={styles.wrapper}>
            <Image source={ILStartChat} style={styles.bgPage} />
            <Text style={styles.emptyChat}>Chat Dokter yuk!</Text>
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.page}>
        <View style={styles.content}>
          <Text style={styles.title}>Messages</Text>
          {lastChat.map((chat) => {
            const dataDoctor = {
              id: chat.doctor.uid,
              data: chat.doctor,
            };
            return (
              <List
                key={chat.id}
                imgProfile={
                  chat.doctor.photo === undefined
                    ? ILNullProfile
                    : {uri: chat.doctor.photo}
                }
                doctorName={chat.doctor.fullName}
                description={chat.lastContentChat}
                onPress={() => navigation.navigate('Chatting', dataDoctor)}
              />
            );
          })}
        </View>
      </View>
    );
  }
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
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyChat: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.text.disabled,
    textAlign: 'center',
  },
  bgPage: {
    width: 210,
    height: 210,
  },
});
