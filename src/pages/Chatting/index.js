import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {BubbleChat, Header, InputChat} from '../../component';
import {FireBase} from '../../config';
import {
  chatTime,
  colors,
  fonts,
  getData,
  setDateChat,
  showErrorMessage,
} from '../../utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataFromLocal();
    // mengambil data chatting dari firebase ⬇⬇⬇
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    FireBase.database()
      .ref(urlFirebase)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          const dataSnapshot = snapshot.val();
          const allDataChat = [];
          // convert data object => array pada folder tanggal-chat ⬇⬇⬇
          Object.keys(dataSnapshot).map((key) => {
            const dataChat = dataSnapshot[key];
            const newDataChat = [];
            // convert data object => array pada folder data chat yang ada didalam folder tanggal-chat ⬇⬇⬇
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          // console.log('data snapshot hasil parse: ', allDataChat);
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);

  const getDataFromLocal = () => {
    // mengambil data user dari local storage ⬇⬇⬇
    getData('user').then((res) => {
      // console.log('user yang sedang login: ', res);
      setUser(res);
    });
  };

  const sendChat = () => {
    const today = new Date();

    // data chat
    const data = {
      sendBY: user.uid,
      chatDate: today.getTime(),
      chatTime: chatTime(today),
      chatContent: chatContent,
    };

    // kirim data ke firebase
    FireBase.database()
      .ref(
        `chatting/${user.uid}_${dataDoctor.data.uid}/allChat/${setDateChat(
          today,
        )}`,
      )
      .push(data)
      .then(() => {
        setChatContent('');
      })
      .catch((err) => {
        showErrorMessage(err.message);
      });
  };

  return (
    <View style={styles.page}>
      <Header
        type="HeaderProfile"
        name={dataDoctor.data.fullName}
        desc={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((allChat) => {
            return (
              <View key={allChat.id}>
                <Text style={styles.date}>{allChat.id}</Text>
                {allChat.data.map((chat) => {
                  const IsUser = chat.data.sendBY === user.uid;
                  return (
                    <BubbleChat
                      key={chat.id}
                      IsUser={IsUser}
                      message={chat.data.chatContent}
                      timeSend={chat.data.chatTime}
                      photo={IsUser ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <View style={styles.inputWrapper}>
        <InputChat
          value={chatContent}
          onChangeText={(value) => setChatContent(value)}
          onButtonPress={sendChat}
        />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  date: {
    fontFamily: fonts.primary[400],
    fontSize: 11,
    color: colors.text.disabled,
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    paddingTop: 20,
    paddingHorizontal: 16,
    flex: 1,
  },
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  inputWrapper: {
    padding: 16,
    backgroundColor: 'white',
  },
});
