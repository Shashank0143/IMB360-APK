import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';

const ForgotPasswordScreen = ({
  navigation,
}: any) => {

  const [email, setEmail] =
    useState('');

  const handleSendCode = () => {

    if (!email) {
      return;
    }

    navigation.navigate(
      'OtpVerification',
      {
        email,
      },
    );
  };

  return (
    <ScreenWrapper>

      {/* BACK BUTTON */}

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>
          ←
        </Text>
      </TouchableOpacity>

      {/* LOGO */}

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/IMB360.png')}
          style={styles.logo}
        />
      </View>

      {/* TITLE */}

      <Text style={styles.title}>
        FORGOT PASSWORD
      </Text>

      {/* SUBTITLE */}

      <Text style={styles.subtitle}>
        Enter your email and we'll send
        a verification code instantly.
      </Text>

      {/* FORM */}

      <View style={styles.form}>

        <AuthInput
          label="Email address*"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />

        <AuthButton
          title="Send Code"
          onPress={handleSendCode}
        />

      </View>

    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({

  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  backText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '600',
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
  },

  logo: {
    width: 220,
    height: 90,
    resizeMode: 'contain',
  },

  title: {
    color: '#00D1D1',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 25,
  },

  subtitle: {
    color: '#8A8A8A',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 14,
    lineHeight: 24,
  },

  form: {
    marginTop: 80,
  },

});

export default ForgotPasswordScreen;