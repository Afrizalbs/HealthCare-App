import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Header, MainProfile, Input, Button} from '../../component';
import FireBase from '../../config/FireBase';
import {colors, getData, storeData} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {ILNullProfile} from '../../assets';

const UpdateProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    pekerjaan: '',
    email: '',
  });
  const [password, setPasword] = useState('');
  const [photoForDB, setPhotoForDB] = useState('');
  const [photo, setPhoto] = useState(ILNullProfile);

  useEffect(() => {
    getData('user').then((response) => {
      const data = response;
      setPhoto({uri: response.photo});
      setProfile(data);
    });
  }, []);

  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 300, maxWidth: 300},
      (response) => {
        // Same code as in above section!
        console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Upss, Anda tidak jadi mengganti photo',
            type: 'default',
            backgroundColor: colors.error, // background color
            color: 'white', // text color
          });
        } else {
          const source = {uri: response.uri};
          setPhotoForDB(`data:${response.type};base64, ${response.data}`); //mengambil data gambar untuk db
          setPhoto(source);
        }
      },
    );
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };

  const updatePassword = () => {
    FireBase.auth().onAuthStateChanged((user) => {
      if (user) {
        user.updatePassword(password).catch((error) => {
          showMessage({
            message: error.message,
            type: 'default',
            backgroundColor: colors.error,
            color: 'white',
          });
        });
      }
    });
  };

  const updateProfileData = () => {
    console.log('update profile: ', profile);
    const data = profile;
    data.photo = photoForDB;

    FireBase.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('success: ', data);
        storeData('user', data);
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      });
  };

  const update = () => {
    console.log('new password: ', password);

    if (password.length > 0) {
      if (password.length < 6) {
        showMessage({
          message: 'Ups Pasword kurang dari 6 karakter!',
          type: 'default',
          backgroundColor: colors.error,
          color: 'white',
        });
      } else {
        // update profile dan password
        updatePassword();
        updateProfileData();
        navigation.replace('MainApp');
      }
    } else {
      // hanya update profile
      updateProfileData();
      navigation.replace('MainApp');
    }
  };
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <MainProfile isRemove photo={photo} onPress={getImage} />
        <View style={styles.space(26)} />
        <View style={styles.content}>
          <Input
            label="Full Name"
            value={profile.fullName}
            onChangeText={(value) => {
              changeText('fullName', value);
            }}
          />
          <View style={styles.space(24)} />
          <Input
            label="Pekerjaan"
            value={profile.pekerjaan}
            onChangeText={(value) => {
              changeText('pekerjaan', value);
            }}
          />
          <View style={styles.space(24)} />
          <Input label="Email Address" value={profile.email} disable />
          <View style={styles.space(24)} />
          <Input
            label="Password"
            secureTextEntry
            value={password}
            onChangeText={(value) => {
              setPasword(value);
            }}
          />
          <View style={styles.space(40)} />
          <Button title="Save Profile" onPress={update} />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 40,
  },
  space: (x) => ({
    height: x,
  }),
});
