import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <LinearGradient
      colors={[
        active ? colors.green_light : '#F5FAF7', '#F0F0F0'
      ]}
      start={[0, 0]}
      end={[1, 1]}
      locations={[0.25, 1]}
      style={[
        styles.container
      ]}
    >
      <RectButton
        style={styles.button}
        {...rest}
      >
        <Text style={[
          styles.title,
          active && styles.titleActive
        ]}>{title}</Text>
      </RectButton>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 3,
  },
  button: {
    flex: 1,
    height: 40,
    width: 76,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: colors.heading,
    fontFamily: fonts.text
  },
  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});

