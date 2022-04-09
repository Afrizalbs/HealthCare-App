import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import {IconEastNext, ILChatting, ILDoctor, ILReview} from '../../assets';
import {fonts, colors} from '../../utils';

const Caption = ({text}) => {
  return <Text style={styles.caption}>{text}</Text>;
};

const OnboardingScreen = ({navigation}) => {
  const Skip = ({onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.skipWrapper}>
        <Text style={styles.skipText}>SKIP</Text>
      </TouchableOpacity>
    );
  };
  const Next = ({isLight, selected, onPress}) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected
        ? 'rgba(11, 202, 212, 0.8)'
        : 'rgba(11, 202, 212, 0.8)';
    } else {
      backgroundColor = selected
        ? 'rgba(17, 35, 64, 0.8)'
        : 'rgba(255, 255, 255, 0.8)';
    }
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          marginRight: 15,
          paddingVertical: 5,
          paddingHorizontal: 15,
          borderRadius: 15,
          backgroundColor,
        }}>
        <IconEastNext />
      </TouchableOpacity>
    );
  };
  const Square = ({isLight, selected}) => {
    let backgroundColor;
    if (isLight) {
      backgroundColor = selected
        ? 'rgba(17, 35, 64, 0.8)'
        : 'rgba(17, 35, 64, 0.3)';
    } else {
      backgroundColor = selected
        ? 'rgba(17, 35, 64, 0.8)'
        : 'rgba(17, 35, 64, 0.3)';
    }
    return (
      <View
        style={{
          width: 6,
          height: 6,
          marginHorizontal: 3,
          backgroundColor,
        }}
      />
    );
  };
  const skip = () => {
    navigation.replace('GetStarted');
  };
  const done = () => {
    navigation.replace('GetStarted');
  };
  return (
    <Onboarding
      DotComponent={Square}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      bottomBarHighlight={false}
      transitionAnimationDuration={200}
      onSkip={skip}
      onDone={done}
      pages={[
        {
          backgroundColor: colors.card.bgDefault,
          image: (
            <ILDoctor height={350} width={300} style={styles.illustration} />
          ),
          title: <Caption text="Konsultasi dengan Profesional" />,
          subtitle: <Text>tanpa terhalang waktu dan tempat</Text>,
        },
        {
          backgroundColor: colors.text.desc,
          image: (
            <ILChatting height={350} width={300} style={styles.illustration} />
          ),
          title: <Caption text="Chat dengan Dokter pilihanmu" />,
          subtitle: <Text>sesuaikan dengan keluhanmu</Text>,
        },
        {
          backgroundColor: colors.card.bgDefault,
          image: (
            <ILReview height={350} width={300} style={styles.illustration} />
          ),
          title: <Caption text="Beri Feedback untuk aplikasi kami" />,
          subtitle: <Text>jadikan aplikasi ini lebih baik 🙂</Text>,
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  illustration: {
    height: 200,
    width: 300,
  },
  caption: {
    fontFamily: fonts.primary[600],
    fontSize: 18,
    color: colors.text.default,
  },
  skipWrapper: {
    paddingHorizontal: 15,
  },
  skipText: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.text.default,
  },
  nextWrapper: {
    marginRight: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
});
