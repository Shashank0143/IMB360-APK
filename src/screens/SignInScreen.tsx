import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import ScreenWrapper from '../components/ScreenWrapper';
import AuthInput from '../components/AuthInput';
import AuthButton from '../components/AuthButton';
import SocialButton from '../components/SocialButton';

const SignInScreen = ({ navigation }: any) => {
  return (
    <ScreenWrapper>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/IMB360.png')}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>
        WELCOME BACK!
      </Text>

      <AuthInput label="Email address*" />

      <AuthInput
        label="Password*"
        secureTextEntry
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ForgotPassword')
        }
      >
        <Text style={styles.forgot}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <AuthButton title="Sign in" />

      <View style={styles.dividerContainer}>
        <View style={styles.line} />

        <Text style={styles.dividerText}>
          Or continue with
        </Text>

        <View style={styles.line} />
      </View>

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

      <TouchableOpacity
        style={styles.bottom}
        onPress={() =>
          navigation.navigate('SignUp')
        }
      >
        <Text style={styles.bottomText}>
          Don't have an account?{' '}
          <Text style={styles.link}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>

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
    fontSize: 34,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },

  forgot: {
    color: '#FFF',
    textAlign: 'right',
    marginBottom: 30,
    fontWeight: '600',
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
    marginTop: 'auto',
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

export default SignInScreen;