import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { getUsername } from '../libs/storage';

interface HeaderProps {
}

export function Header({ }: HeaderProps) {

  const [username, setUsername] = useState<string>('');

  useEffect(() => {

    async function loadStorageUsername() {
      const user = await getUsername();

      setUsername(user || '');
    }

    loadStorageUsername();

  }, [username])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View>
        <Image style={styles.user_image} source={{ uri: "https://github.com/saulobraine.png" }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: getStatusBarHeight(),
    paddingVertical: 30
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 36
  },
  username: {
    fontSize: 32,
    color: colors.body,
    fontFamily: fonts.heading
  },
  user_image: {
    width: 70,
    height: 70,
    borderRadius: 40,
    resizeMode: 'cover'
  }
});