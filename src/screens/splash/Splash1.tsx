import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import GradientButton from '../../components/GradientButton'
import GradientText from '../../components/GradientText'


 export default function Splash1
({ navigation }: any) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        backgroundColor="#E8EFD6"
        barStyle="dark-content"
      />

      <TouchableOpacity style={styles.skipButton}>
        <Text style={styles.skipText}>
          Skip
        </Text>
      </TouchableOpacity>

      <View style={styles.imageContainer}>
        <View style={styles.blob} />

        <Image
          source={require('../../assets/images/splash1.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          FIND CREATORS FOR
        </Text>

        <GradientText text="YOUR BRAND" />

        <Text style={styles.description}>
          Discover creators that align with your
          brand, audience, and campaign goals.
        </Text>

        <GradientButton
          title="Next"
          onPress={() =>
            navigation.navigate('Splash2')
          }
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },

  skipButton: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: -30,
    marginRight: 40,
  },

  skipText: {
    fontSize: 18,
    fontFamily: 'Poppins',
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: -20,
  },

  blob: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: '#D6E1BB',
    borderRadius: 100,
    transform: [{ rotate: '-15deg' }],
  },

  image: {
    width: 550,
    height: 550,
    zIndex: 2,
    marginTop: 80
  },

  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#B9CD8A',
  },

  bottomContainer: {
    paddingHorizontal: 32,
    paddingBottom: 45,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#FFFFFF',
    lineHeight: 30,
    fontWeight: 'bold',
    marginLeft: 20,
  },

  description: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#808080',
    lineHeight: 20,
    width: '65%',
    marginBottom: 110,
    marginTop: 20,
    marginLeft: 20,
  },
})  