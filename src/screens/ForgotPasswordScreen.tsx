import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import {
  useNavigation,
} from '@react-navigation/native';

import FloatingInput from '../components/FloatingInput';

const ForgotPasswordScreen = () => {

  const navigation = useNavigation<any>();

  const [email, setEmail] =
    useState('');

  return (
    <View style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />

      {/* BACK */}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >

        <Text style={styles.backText}>
          ←
        </Text>

      </TouchableOpacity>

      {/* LOGO */}

      <Image
        source={require('../assets/images/IMB360.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* TITLE */}

      <Text style={styles.title}>
        FORGOT PASSWORD
      </Text>

      <Text style={styles.description}>
        Enter your email and we'll send a
        verification code instantly.
      </Text>

      {/* EMAIL */}

      <FloatingInput
        label="Email Address *"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* BUTTON */}

      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.buttonContainer}
      >

        <LinearGradient
          colors={['#00CFFF', '#41FF7A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >

          <Text style={styles.buttonText}>
            Send Code
          </Text>

        </LinearGradient>

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 24,
    paddingTop: 20,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
  },

  backText: {
    color: '#FFF',
    fontSize: 22,
  },

  logo: {
    width: 170,
    height: 55,
    alignSelf: 'center',
    marginTop: 10,
  },

  title: {
    color: '#00D5FF',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 18,
  },

  description: {
    color: '#A5A5A5',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 22,
    fontSize: 13,
    paddingHorizontal: 18,
    marginBottom: 14,
  },

  buttonContainer: {
    marginTop: 28,
  },

  button: {
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },

});

export default ForgotPasswordScreen;