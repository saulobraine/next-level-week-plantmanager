import React from 'react';
import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity, Dimensions, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'
import wateringWater from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { useNavigation } from '@react-navigation/core';
import { getUsername } from '../libs/storage';

export function Welcome() {

  const navigation = useNavigation();

  async function handleStart() {

    const user = await getUsername();

    if (user) {
      navigation.navigate("PlantSelect");
    } else {
      navigation.navigate("UserIdentification");
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

          <Image
            source={wateringWater}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={handleStart}
          >
            <Entypo style={styles.buttonIcon} name="chevron-thin-right" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingTop: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  buttonIcon: {
    fontSize: 24,
    color: colors.white
  }
})