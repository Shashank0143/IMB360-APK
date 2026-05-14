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
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/splash3.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>


      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          Ready to Redefine Influence?
        </Text>

        <Text style={styles.description}>
          Sign up free for brands or
          creators - explore demos,
          match instantly, and earn real
          results.
         </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Splash3')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
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

  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 25,
  },

  backButton: {
    width: 35,
    height: 35,
    borderRadius: 17,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginTop: -20,
    marginLeft: -5
  },

  skipText: {
    fontSize: 18,
    fontFamily: 'DMSans-Bold',
    color: '#000',
    fontWeight: 'bold',
    marginRight: 10
  },

  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },

  image: {
    width: 400,
    height: 400,
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
    marginBottom: 5,
    marginTop: -78,
    fontWeight: 'bold',
    width: '90%',
    marginLeft: 20
  },

  description: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#111',
    lineHeight: 22,
    width: '60%',
    marginBottom: 49,
    marginLeft: 20

  },

  button: {
    backgroundColor: '#00ACB3',
    width: 130,
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
    marginTop: -10 ,
    marginBottom: 50
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
  },
})