import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { useSelector } from 'react-redux';

import ScreenWrapper from '../components/ScreenWrapper';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import SocialButton from '../components/SocialButton';

import { RootState } from '../store';

const SignUpScreen = ({ navigation }: any) => {

  /* ---------------- ROLE FROM REDUX ---------------- */

  const userType = useSelector(
    (state: RootState) => state.auth.userType,
  );

  /* ---------------- FORM STATES ---------------- */

  const [fullName, setFullName] =
    useState('');

  const [email, setEmail] =
    useState('');

  const [phone, setPhone] =
    useState('');

  const [password, setPassword] =
    useState('');

  /* ---------------- REGISTER ---------------- */

  const handleRegister = () => {

    if (
      !fullName ||
      !email ||
      !phone ||
      !password
    ) {
      Alert.alert(
        'Missing Fields',
        'Please fill all fields.',
      );

      return;
    }

    const payload = {
      fullName,
      email,
      phone,
      password,

      role: userType,
    };

    console.log('REGISTER PAYLOAD =>', payload);

    /*
      SEND TO BACKEND HERE

      Example:

      axios.post('/register', payload)

    */

    Alert.alert(
      'Registration Success',
      `Account created as ${userType.toUpperCase()}`,
    );
  };

  return (
    <ScreenWrapper>

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* BACK BUTTON */}

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>←</Text>
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
          CREATE YOUR ACCOUNT
        </Text>

        {/* ROLE BADGE */}

        <View style={styles.roleBadge}>
          <Text style={styles.roleBadgeText}>
            REGISTERING AS{' '}
            {userType.toUpperCase()}
          </Text>
        </View>

        {/* FORM */}

        <AuthInput
          label="Full Name*"
          placeholder="Enter full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <AuthInput
          label="Email address*"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />

        <AuthInput
          label="Phone*"
          placeholder="Enter phone"
          value={phone}
          onChangeText={setPhone}
        />

        <AuthInput
          label="Create Password*"
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* PASSWORD INFO */}

        <Text style={styles.passwordInfo}>
          Password must contain 8 characters,
          one special character, one number,
          and one capital letter.
        </Text>

        {/* REGISTER BUTTON */}

        <AuthButton
          title={`REGISTER AS ${userType.toUpperCase()}`}
          onPress={handleRegister}
        />

        {/* DIVIDER */}

        <View style={styles.dividerContainer}>
          <View style={styles.line} />

          <Text style={styles.dividerText}>
            Or continue with
          </Text>

          <View style={styles.line} />
        </View>

        {/* SOCIAL LOGIN */}

        <View style={styles.socialRow}>
          <SocialButton
            title="Google"
            image={require('../assets/images/google.png')}
          />

          <SocialButton
            title="Apple"
            image={require('../assets/images/apple.png')}
          />
        </View>

        {/* FOOTER */}

        <TouchableOpacity
          style={styles.bottom}
          onPress={() =>
            navigation.navigate('SignIn')
          }
        >
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text style={styles.link}>
              Login
            </Text>
          </Text>
        </TouchableOpacity>

      </ScrollView>

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
    color: '#2BE38C',
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },

  roleBadge: {
    alignSelf: 'center',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 50,
    backgroundColor: 'rgba(45,212,191,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(45,212,191,0.3)',
    marginBottom: 30,
  },

  roleBadgeText: {
    color: '#2DD4BF',
    fontWeight: '800',
    letterSpacing: 1,
    fontSize: 12,
  },

  passwordInfo: {
    color: '#7F7F7F',
    fontSize: 12,
    marginBottom: 25,
    lineHeight: 20,
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 35,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#222',
  },

  dividerText: {
    color: '#888',
    marginHorizontal: 12,
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
  },

  bottom: {
    marginTop: 40,
    marginBottom: 35,
    alignItems: 'center',
  },

  bottomText: {
    color: '#AAA',
  },

  link: {
    color: '#FFF',
    fontWeight: '800',
  },
});

export default SignUpScreen;