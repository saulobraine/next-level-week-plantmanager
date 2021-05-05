import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantCardPrimaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCardPrimary({ data, ...rest }: PlantCardPrimaryProps) {
  return (

    <LinearGradient
      colors={['#F5FAF7', '#F0F0F0']}
      start={[0, 0]}
      end={[1, 1]}
      locations={[0.25, 1]}
      style={styles.container}
    >
      <RectButton
        style={styles.button}
        {...rest}
      >
        <SvgFromUri
          uri={data.photo}
          width={70}
          height={70}
        />
        <Text style={styles.title}>{data.name}</Text>
      </RectButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 20,
    margin: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    height: 150,
  },
  title: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
});

