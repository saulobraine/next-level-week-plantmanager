import React from 'react';
import { Text, StyleSheet, View, Animated } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { SvgFromUri } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Feather } from '@expo/vector-icons';

interface PlantCardSecondaryProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export function PlantCardSecondary({ data, handleRemove, ...rest }: PlantCardSecondaryProps) {
  return (
    <Swipeable
      overshootRight={false}
      shouldCancelWhenOutside={true}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather
                name="trash"
                size={32}
                color={colors.white}
              />
            </RectButton>
          </View>

        </Animated.View>
      )}
    >
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
            width={50}
            height={50}
          />
          <Text style={styles.title}>{data.name}</Text>
          <View style={styles.details}>
            <Text style={styles.detailsTimeLabel}>
              Regar às
        </Text>
            <Text style={styles.detailsTime}>
              {data.hour}
            </Text>
          </View>
        </RectButton>
      </LinearGradient>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    marginVertical: 5,
    overflow: 'hidden'
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  title: {
    flex: 1,
    fontFamily: fonts.heading,
    marginLeft: 10,
    fontSize: 17,
    color: colors.heading
  },
  details: {
    alignItems: 'flex-end'
  },
  detailsTimeLabel: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_light
  },
  detailsTime: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: fonts.text,
    color: colors.body_dark
  },
  buttonRemove: {
    width: 120,
    height: 103,
    marginLeft: -35,
    backgroundColor: colors.red,
    marginTop: 5,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20

  }
});