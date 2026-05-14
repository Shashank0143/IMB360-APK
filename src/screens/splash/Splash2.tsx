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

export default function Splash2({ navigation }: any) {
  return (
    <SafeAreaView
      style={styles.container}
      edges={['top', 'left', 'right']}
    >
      <StatusBar
        backgroundColor="#E8EFD6"
        barStyle="dark-content"
      />

      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>
            ←
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.skipText}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.imageContainer}>
        <View style={styles.blob} />

        <Image
          source={require('../../assets/images/splash2.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          GROW FASTER
        </Text>

        <GradientText text="WITH CREATORS" />

        <Text style={styles.description}>
          Connect with the right creators,
          launch impactful campaigns,
          and grow your audience faster.
        </Text>

        <GradientButton
          title="Next"
          onPress={() =>
            navigation.navigate('Splash3')
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

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 40,
  },

  backText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: -20,
    marginLeft: -5,
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
    marginTop: 30,
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
    width: 300,
    height: 450,
    zIndex: 2,
  },

  bottomContainer: {
    paddingHorizontal: 32,
    paddingBottom: 45,
  },

  title: {
    fontSize: 24,
    fontFamily: 'Poppins-SemiBold',
    color: '#FFFFFF',
    lineHeight: 30,
    marginLeft: 20,
    marginBottom: 0,
    marginTop: -5
  },

  description: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#808080',
    width: '73%',
    marginBottom: 100,
    marginTop: 20,
    marginLeft: 20,
  },
})