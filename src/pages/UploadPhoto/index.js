import React, {useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {Header, Button, Link} from '../../component';
import {ILNullProfile, IconAddPhoto, IconDelPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullProfile);
  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary({}, (response) => {
      // Same code as in above section!
      console.log('response: ', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Masukan Photo untuk melanjutkan',
          type: 'default',
          backgroundColor: colors.error, // background color
          color: 'white', // text color
        });
      } else {
        const source = {uri: response.uri};
        setPhoto(source);
        setHasPhoto(true);
      }
    });
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

          <Text style={styles.name}>wahid dwipa baskoro</Text>
          <Text style={styles.job}>Product Manager</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.replace('MainApp')}
          />
          <View style={styles.space(30)} />
          <Link
            title="Skip for this"
            align="center"
            fontsize={16}
            onPress={() => navigation.replace('MainApp')}
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
