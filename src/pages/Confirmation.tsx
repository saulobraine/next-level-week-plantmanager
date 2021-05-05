import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { Button } from '../components/Button';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {

  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.icon}>
          {emojis[icon]}
        </Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  content: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    fontSize: 75,
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 38,
    marginTop: 40
  },
  subtitle: {
    fontSize: 17,
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.body,
    paddingVertical: 20
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
});

