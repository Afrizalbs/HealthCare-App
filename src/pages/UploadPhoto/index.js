import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {IconAddPhoto, IconDelPhoto, ILNullProfile} from '../../assets';
import {Button, Header, Link} from '../../component';
import {FireBase} from '../../config';
import {colors, fonts, showErrorMessage, storeData} from '../../utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, pekerjaan, uid} = route.params;
  const [photoForDB, setPhotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullProfile);
  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxHeight: 300, maxWidth: 300},
      (response) => {
        // Same code as in above section!
        if (response.didCancel || response.error) {
          showErrorMessage(
            'Ups!!, Anda sepertinya tidak jadi mengganti foto ya',
          );
        } else {
          setPhotoForDB(`data:${response.type};base64, ${response.data}`); //mengambil data gambar untuk db
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const uploadAndContinue = () => {
    FireBase.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('Login');
  };
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapper} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto && (
              <IconDelPhoto style={styles.add} width={30} height={30} />
            )}
            {!hasPhoto && (
              <IconAddPhoto style={styles.add} width={30} height={30} />
            )}
          </TouchableOpacity>

          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.job}>{pekerjaan}</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={uploadAndContinue}
          />
          <View style={styles.space(30)} />
          <Link
            title="Skip for this"
            align="center"
            fontsize={16}
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 40,
    paddingTop: 0,
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: colors.border.default,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 26,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  add: {
    position: 'absolute',
    right: 5,
    bottom: 7,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[400],
    textTransform: 'capitalize',
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 8,
  },
  job: {
    fontSize: 18,
    color: colors.text.disabled,
    textAlign: 'center',
    fontFamily: fonts.primary[400],
  },
  space: (x) => ({
    height: x,
  }),
});
export default UploadPhoto;
