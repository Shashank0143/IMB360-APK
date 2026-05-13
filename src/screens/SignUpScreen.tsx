import React, {
  useRef,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Animated,
  Easing,
  StatusBar,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MaskedView from '@react-native-masked-view/masked-view';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  useSelector,
} from 'react-redux';

import {
  RootState,
} from '../store';

import {
  COUNTRIES,
} from '../utils/countries';

const { width } =
  Dimensions.get('window');

const GradientText = ({
  text,
  colors,
}: {
  text: string;
  colors: string[];
}) => {

  return (
    <MaskedView
      maskElement={
        <Text style={styles.gradientTitle}>
          {text}
        </Text>
      }
    >

      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >

        <Text
          style={[
            styles.gradientTitle,
            { opacity: 0 },
          ]}
        >
          {text}
        </Text>

      </LinearGradient>

    </MaskedView>
  );
};

const AnimatedInput = ({
  label,
  value,
  onChangeText,
  keyboardType = 'default',
  secureTextEntry = false,
}: any) => {

  const animated =
    useRef(
      new Animated.Value(
        value ? 1 : 0,
      ),
    ).current;

  const handleFocus = () => {

    Animated.timing(animated, {
      toValue: 1,
      duration: 220,
      easing: Easing.out(
        Easing.ease,
      ),
      useNativeDriver: false,
    }).start();

  };

  const handleBlur = () => {

    if (!value) {

      Animated.timing(animated, {
        toValue: 0,
        duration: 220,
        easing: Easing.out(
          Easing.ease,
        ),
        useNativeDriver: false,
      }).start();

    }

  };

  const labelStyle = {

    position: 'absolute' as const,

    left: 16,

    top: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [18, -9],
    }),

    fontSize: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 12],
    }),

    color: animated.interpolate({
      inputRange: [0, 1],
      outputRange: [
        '#666',
        '#00D5FF',
      ],
    }),

    backgroundColor: '#000',

    paddingHorizontal: 6,

    zIndex: 20,

  };

  return (
    <View style={styles.inputWrapper}>

      <Animated.Text
        style={labelStyle}
      >
        {label}
      </Animated.Text>

      <TextInput
        value={value}
        onChangeText={
          onChangeText
        }
        keyboardType={
          keyboardType
        }
        secureTextEntry={
          secureTextEntry
        }
        style={styles.input}
        placeholder=""
        placeholderTextColor="#666"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

    </View>
  );
};

const SignUpScreen = () => {

  const navigation =
    useNavigation<any>();

  const userType =
    useSelector(
      (
        state: RootState,
      ) =>
        state.auth.userType,
    );

  const [
    fullName,
    setFullName,
  ] = useState('');

  const [
    email,
    setEmail,
  ] = useState('');

  const [
    phone,
    setPhone,
  ] = useState('');

  const [
    password,
    setPassword,
  ] = useState('');

  const [
    accepted,
    setAccepted,
  ] = useState(false);

  const [
    countryCode,
    setCountryCode,
  ] = useState('IN');

  const [
    callingCode,
    setCallingCode,
  ] = useState('91');

  const [
    countryModalVisible,
    setCountryModalVisible,
  ] = useState(false);

  return (
    <SafeAreaView
      style={styles.container}
    >

      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />

      {/* BACK */}

      <TouchableOpacity
        style={styles.backButton}
        activeOpacity={0.8}
        onPress={() =>
          navigation.goBack()
        }
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

      {/* ACCOUNT TYPE */}

      <View
        style={
          styles.accountTypeContainer
        }
      >

        <Text
          style={
            styles.accountLabel
          }
        >
          Creating
        </Text>

        <View
          style={
            styles.gradientContainer
          }
        >

          <GradientText
            text={
              userType ===
              'brand'
                ? 'Brand Account'
                : 'Creator Account'
            }
            colors={
              userType ===
              'brand'
                ? [
                    '#00CFFF',
                    '#41FF7A',
                  ]
                : [
                    '#C850FF',
                    '#00D5FF',
                  ]
            }
          />

        </View>

      </View>

      {/* TITLE */}

      <Text style={styles.title}>
        CREATE YOUR ACCOUNT
      </Text>

      {/* NAME */}

      <AnimatedInput
        label="Full Name"
        value={fullName}
        onChangeText={
          setFullName
        }
      />

      {/* EMAIL */}

      <View
        style={
          styles.emailContainer
        }
      >

        <AnimatedInput
          label="Email Address"
          value={email}
          onChangeText={
            setEmail
          }
          keyboardType="email-address"
        />

        <TouchableOpacity>

          <Text
            style={
              styles.verifyText
            }
          >
            Send Verification
            Code
          </Text>

        </TouchableOpacity>

      </View>

      {/* PHONE */}

      <View style={styles.phoneSection}>

        <Text style={styles.phoneLabel}>
          Phone Number
        </Text>

        <View style={styles.phoneContainer}>

          {/* COUNTRY */}

          <TouchableOpacity
            style={
              styles.countryButton
            }
            activeOpacity={0.8}
            onPress={() =>
              setCountryModalVisible(
                true,
              )
            }
          >

            <Text
              style={
                styles.flagText
              }
            >
              {
                COUNTRIES.find(
                  item =>
                    item.code ===
                    countryCode,
                )?.flag
              }
            </Text>

            <Text
              style={
                styles.callingCode
              }
            >
              +{callingCode}
            </Text>

            <Text
              style={
                styles.dropdownArrow
              }
            >
              ▼
            </Text>

          </TouchableOpacity>

          {/* PHONE */}

          <TextInput
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter phone number"
            placeholderTextColor="#666"
            style={styles.phoneInput}
          />

        </View>

        {/* MODAL */}

        <Modal
          visible={
            countryModalVisible
          }
          transparent
          animationType="fade"
        >

          <View
            style={
              styles.modalOverlay
            }
          >

            <View
              style={
                styles.modalContainer
              }
            >

              <Text
                style={
                  styles.modalTitle
                }
              >
                Select Country
              </Text>

              <FlatList
                data={COUNTRIES}
                keyExtractor={item =>
                  item.code
                }
                showsVerticalScrollIndicator={
                  false
                }
                renderItem={({
                  item,
                }) => (

                  <TouchableOpacity
                    style={
                      styles.countryItem
                    }
                    activeOpacity={0.8}
                    onPress={() => {

                      setCountryCode(
                        item.code,
                      );

                      setCallingCode(
                        item.callingCode.replace(
                          '+',
                          '',
                        ),
                      );

                      setCountryModalVisible(
                        false,
                      );

                    }}
                  >

                    <Text
                      style={
                        styles.countryFlag
                      }
                    >
                      {item.flag}
                    </Text>

                    <Text
                      style={
                        styles.countryName
                      }
                    >
                      {item.name}
                    </Text>

                    <Text
                      style={
                        styles.countryCodeText
                      }
                    >
                      {
                        item.callingCode
                      }
                    </Text>

                  </TouchableOpacity>

                )}
              />

            </View>

          </View>

        </Modal>

      </View>

      {/* PASSWORD */}

      <AnimatedInput
        label="Create Password"
        value={password}
        onChangeText={
          setPassword
        }
        secureTextEntry
      />

      {/* PASSWORD */}

      <Text
        style={
          styles.passwordInfo
        }
      >
        Password must contain
        uppercase, lowercase,
        number and special
        character.
      </Text>

      {/* TERMS */}

      <TouchableOpacity
        style={
          styles.termsContainer
        }
        activeOpacity={0.8}
        onPress={() =>
          setAccepted(
            !accepted,
          )
        }
      >

        <View
          style={[
            styles.checkbox,
            accepted &&
              styles.checkboxActive,
          ]}
        />

        <Text
          style={
            styles.termsText
          }
        >
          I accept Privacy
          Policy and Terms
          of Use
        </Text>

      </TouchableOpacity>

      {/* BUTTON */}

      <TouchableOpacity
        activeOpacity={0.9}
      >

        <LinearGradient
          colors={[
            '#00CFFF',
            '#41FF7A',
          ]}
          start={{
            x: 0,
            y: 0,
          }}
          end={{
            x: 1,
            y: 0,
          }}
          style={
            styles.registerButton
          }
        >

          <Text
            style={
              styles.registerText
            }
          >
            Register
          </Text>

        </LinearGradient>

      </TouchableOpacity>

      {/* DIVIDER */}

      <View
        style={
          styles.dividerContainer
        }
      >

        <View
          style={styles.line}
        />

        <Text
          style={
            styles.dividerText
          }
        >
          Or continue with
        </Text>

        <View
          style={styles.line}
        />

      </View>

      {/* SOCIAL */}

      <View
        style={
          styles.socialContainer
        }
      >

        <TouchableOpacity
          style={
            styles.socialButton
          }
        >

          <Image
            source={require('../assets/images/google.png')}
            style={
              styles.socialIcon
            }
          />

          <Text
            style={
              styles.socialText
            }
          >
            Google
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.socialButton
          }
        >

          <Image
            source={require('../assets/images/apple.png')}
            style={
              styles.socialIcon
            }
          />

          <Text
            style={
              styles.socialText
            }
          >
            Apple
          </Text>

        </TouchableOpacity>

      </View>

      {/* FOOTER */}

      <View style={styles.footer}>

        <Text
          style={
            styles.footerText
          }
        >
          Already have an
          account?
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              'SignIn',
            )
          }
        >

          <Text
            style={
              styles.loginText
            }
          >
            Login
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

const styles =
  StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor:
        '#000',
      paddingHorizontal: 24,
      justifyContent:
        'center',
    },

    backButton: {
      position:
        'absolute',
      top: 50,
      left: 24,
      zIndex: 10,
    },

    backText: {
      color: '#FFF',
      fontSize: 30,
      fontWeight: '700',
    },

    logo: {
      width: 160,
      height: 60,
      alignSelf: 'center',
      marginBottom: 6,
    },

    accountTypeContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },

    accountLabel: {
      color: '#888',
      fontSize: 13,
      marginBottom: 6,
    },

    gradientContainer: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    gradientTitle: {
      fontSize: 18,
      fontWeight: '900',
      letterSpacing: 0.5,
    },

    title: {
      color: '#FFF',
      fontSize: 27,
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: 24,
    },

    inputWrapper: {
      marginBottom: 18,
      position: 'relative',
    },

    input: {
      height: 58,
      borderWidth: 1,
      borderColor:
        '#2A2A2A',
      borderRadius: 14,
      paddingHorizontal: 16,
      paddingTop: 18,
      color: '#FFFFFF',
      fontSize: 15,
      backgroundColor:
        '#050505',
    },

    emailContainer: {
      marginBottom: 8,
    },

    verifyText: {
      color: '#00D5FF',
      fontSize: 12,
      fontWeight: '700',
      alignSelf: 'flex-end',
      marginTop: -6,
      marginBottom: 12,
    },

    phoneSection: {
      marginBottom: 18,
    },

    phoneLabel: {
      color: '#888',
      fontSize: 12,
      marginBottom: 10,
      marginLeft: 4,
    },

    phoneContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor:
        '#2A2A2A',
      borderRadius: 14,
      backgroundColor:
        '#050505',
      height: 58,
      overflow: 'hidden',
    },

    countryButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      height: '100%',
      borderRightWidth: 1,
      borderRightColor:
        '#1E1E1E',
    },

    flagText: {
      fontSize: 18,
      marginRight: 6,
    },

    dropdownArrow: {
      color: '#777',
      fontSize: 10,
      marginLeft: 8,
    },

    callingCode: {
      color: '#FFF',
      fontSize: 14,
      fontWeight: '700',
    },

    phoneInput: {
      flex: 1,
      color: '#FFF',
      fontSize: 15,
      paddingHorizontal: 14,
    },

    modalOverlay: {
      flex: 1,
      backgroundColor:
        'rgba(0,0,0,0.7)',
      justifyContent:
        'center',
      alignItems: 'center',
    },

    modalContainer: {
      width: '88%',
      maxHeight: 420,
      backgroundColor:
        '#050505',
      borderRadius: 18,
      borderWidth: 1,
      borderColor:
        '#1A1A1A',
      padding: 18,
    },

    modalTitle: {
      color: '#FFF',
      fontSize: 18,
      fontWeight: '900',
      marginBottom: 18,
    },

    countryItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor:
        '#111',
    },

    countryFlag: {
      fontSize: 22,
      marginRight: 14,
    },

    countryName: {
      flex: 1,
      color: '#FFF',
      fontSize: 15,
    },

    countryCodeText: {
      color: '#00D5FF',
      fontWeight: '700',
      fontSize: 14,
    },

    passwordInfo: {
      color: '#73DFFF',
      fontSize: 11,
      lineHeight: 17,
      marginTop: -8,
      marginBottom: 14,
      fontStyle: 'italic',
    },

    termsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 22,
    },

    checkbox: {
      width: 18,
      height: 18,
      borderWidth: 1,
      borderColor:
        '#777',
      marginRight: 10,
    },

    checkboxActive: {
      backgroundColor:
        '#00D5FF',
      borderColor:
        '#00D5FF',
    },

    termsText: {
      color: '#CFCFCF',
      fontSize: 12,
      flex: 1,
      lineHeight: 18,
    },

    registerButton: {
      height: 54,
      borderRadius: 14,
      justifyContent:
        'center',
      alignItems: 'center',
    },

    registerText: {
      color: '#000',
      fontWeight: '900',
      fontSize: 16,
      letterSpacing: 0.5,
    },

    dividerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 22,
    },

    line: {
      flex: 1,
      height: 1,
      backgroundColor:
        '#2A2A2A',
    },

    dividerText: {
      color: '#888',
      marginHorizontal: 10,
      fontSize: 12,
    },

    socialContainer: {
      flexDirection: 'row',
      justifyContent:
        'space-between',
      marginBottom: 22,
    },

    socialButton: {
      width:
        (width - 64) / 2,
      height: 52,
      borderWidth: 1,
      borderColor:
        '#2A2A2A',
      borderRadius: 14,
      flexDirection: 'row',
      justifyContent:
        'center',
      alignItems: 'center',
      backgroundColor:
        '#050505',
    },

    socialIcon: {
      width: 22,
      height: 22,
      resizeMode:
        'contain',
      marginRight: 10,
    },

    socialText: {
      color: '#FFF',
      fontWeight: '700',
      fontSize: 14,
    },

    footer: {
      flexDirection: 'row',
      justifyContent:
        'center',
      alignItems: 'center',
    },

    footerText: {
      color: '#888',
      fontSize: 13,
      marginRight: 5,
    },

    loginText: {
      color: '#FFF',
      fontSize: 13,
      fontWeight: '900',
      textDecorationLine:
        'underline',
    },

  });

export default SignUpScreen;