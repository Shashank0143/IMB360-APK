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

export default function Splash3({ navigation }: any) {
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
          source={require('../../assets/images/splash3.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          READY TO SCALE
        </Text>

        <GradientText text="YOUR INFLUENCE?" />

        <Text style={styles.description}>
          Find the right creators,
          build impactful collaborations,
          and grow your brand with confidence.
        </Text>

        <GradientButton
          title="Get Started"
          onPress={() =>
            navigation.navigate('Login')
          }
          style={{
            width: 180
          }}
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
    marginTop: 20,
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
    width: 375,
    height: 400,
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
  },

  description: {
    fontSize: 18,
    fontFamily: 'Inter-Regular',
    color: '#808080',
    width: '73%',
    marginBottom: 90,
    marginTop: 10,
    marginLeft: 20,
  },
})