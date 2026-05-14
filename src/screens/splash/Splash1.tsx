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

export default function Splash1({ navigation }: any) {
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
        <Text style={styles.skipText}>Skip</Text>
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
          Find Creators That Convert
        </Text>

        <Text style={styles.description}>
          Match with 50K+ verified influencers who align
          with your brand - launch campaigns in 24 hours.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Splash2')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EFD6',
  },

  skipButton: {
    alignSelf: 'flex-end',
    marginTop: 30,
    marginBottom: -30,
    marginRight: 40,
  },

  skipText: {
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
    color: '#000',
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
    width: 361,
    height: 385,
    zIndex: 2,
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
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000',
    lineHeight: 28,
    marginBottom: 150,
    fontWeight: 'bold',
    marginLeft: 40
  },
  
  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#111',
    lineHeight: 20,
    width: '65%',
    marginBottom: 80,
    marginTop: -135,
    marginLeft: 42
  },

  button: {
    backgroundColor: '#00ACB3',
    width: 107,
    height: 45,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6,

    elevation: 5,
    marginBottom:50,
    marginTop: -50
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
})