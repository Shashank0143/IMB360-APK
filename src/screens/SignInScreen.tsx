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

const SignInScreen = () => {

  const navigation = useNavigation<any>();

  const [email, setEmail] =
    useState('');

  const [password, setPassword] =
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
        WELCOME BACK!
      </Text>

      {/* EMAIL */}

      <FloatingInput
        label="Email Address *"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      {/* PASSWORD */}

      <FloatingInput
        label="Password *"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* OPTIONS */}

      <View style={styles.optionsRow}>

        <View style={styles.rememberRow}>

          <View style={styles.checkbox} />

          <Text style={styles.rememberText}>
            Remember Me
          </Text>

        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'ForgotPassword',
            )
          }
        >

          <Text style={styles.forgotText}>
            Forgot Password?
          </Text>

        </TouchableOpacity>

      </View>

      {/* SIGN IN BUTTON */}

      <TouchableOpacity activeOpacity={0.9}>

        <LinearGradient
          colors={['#00CFFF', '#41FF7A']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.signInButton}
        >

          <Text style={styles.signInText}>
            Sign In
          </Text>

        </LinearGradient>

      </TouchableOpacity>

      {/* OR */}

      <View style={styles.orContainer}>

        <View style={styles.line} />

        <Text style={styles.orText}>
          Or continue with
        </Text>

        <View style={styles.line} />

      </View>

      {/* SOCIAL */}

      <View style={styles.socialRow}>

        <TouchableOpacity
          style={styles.socialButton}
        >

          <Image
            source={require('../assets/images/google.png')}
            style={styles.socialIcon}
          />

          <Text style={styles.socialText}>
            Google
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
        >

          <Image
            source={require('../assets/images/apple.png')}
            style={styles.socialIcon}
          />

          <Text style={styles.socialText}>
            Apple
          </Text>

        </TouchableOpacity>

      </View>

      {/* FOOTER */}

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('SignUp')
        }
      >

        <Text style={styles.footerText}>
          Don't have an account? Sign Up
        </Text>

      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 22,
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
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 14,
    marginBottom: 10,
  },

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#666',
    marginRight: 8,
  },

  rememberText: {
    color: '#AAA',
    fontSize: 12,
  },

  forgotText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  signInButton: {
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },

  signInText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 16,
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#2B2B2B',
  },

  orText: {
    color: '#888',
    fontSize: 12,
    marginHorizontal: 12,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 18,
  },

  socialButton: {
    width: '48%',
    height: 48,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 14,
    backgroundColor: '#050505',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  socialIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    resizeMode: 'contain',
  },

  socialText: {
    color: '#FFF',
    fontWeight: '700',
  },

  footerText: {
    color: '#FFF',
    textAlign: 'center',
    marginTop: 26,
    fontSize: 12,
    textDecorationLine: 'underline',
  },

});

export default SignInScreen;