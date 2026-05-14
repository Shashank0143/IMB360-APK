import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const OTP_LENGTH = 6;

const OtpVerificationScreen = ({
  route,
}: any) => {

  const { email } = route.params;

  const [otp, setOtp] = useState(
    ['', '', '', '', '', ''],
  );

  const [seconds, setSeconds] =
    useState(30);

  const inputs = useRef<TextInput[]>([]);

  /* ---------------- COUNTDOWN ---------------- */

  useEffect(() => {

    if (seconds <= 0) {
      return;
    }

    const timer = setInterval(() => {

      setSeconds(prev => prev - 1);

    }, 1000);

    return () => clearInterval(timer);

  }, [seconds]);

  /* ---------------- OTP CHANGE ---------------- */

  const handleChange = (
    text: string,
    index: number,
  ) => {

    const updatedOtp = [...otp];

    updatedOtp[index] = text;

    setOtp(updatedOtp);

    /*
      MOVE FORWARD
    */

    if (
      text &&
      index < OTP_LENGTH - 1
    ) {
      inputs.current[index + 1]?.focus();
    }
  };

  /* ---------------- BACKSPACE FIX ---------------- */

  const handleKeyPress = (
    e: any,
    index: number,
  ) => {

    if (
      e.nativeEvent.key === 'Backspace'
    ) {

      /*
        IF CURRENT BOX HAS VALUE
        JUST CLEAR IT
      */

      if (otp[index] !== '') {

        const updatedOtp = [...otp];

        updatedOtp[index] = '';

        setOtp(updatedOtp);

        return;
      }

      /*
        MOVE BACKWARD
      */

      if (index > 0) {

        const updatedOtp = [...otp];

        updatedOtp[index - 1] = '';

        setOtp(updatedOtp);

        inputs.current[index - 1]?.focus();
      }
    }
  };

  /* ---------------- VERIFY ---------------- */

  const handleVerify = () => {

    const enteredOtp =
      otp.join('');

    if (enteredOtp.length < 6) {

      Alert.alert(
        'Invalid OTP',
        'Please enter all 6 digits.',
      );

      return;
    }

    console.log(
      'VERIFY OTP =>',
      enteredOtp,
    );

    console.log(
      'EMAIL =>',
      email,
    );

    Alert.alert(
      'OTP Verified',
      'Verification successful.',
    );
  };

  /* ---------------- RESEND ---------------- */

  const handleResend = () => {

    if (seconds > 0) {

      Alert.alert(
        'Please Wait',
        `You can resend OTP in ${seconds} seconds.`,
      );

      return;
    }

    setSeconds(30);

    setOtp([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);

    inputs.current[0]?.focus();

    console.log(
      'RESEND OTP TO =>',
      email,
    );

    Alert.alert(
      'OTP Sent',
      'A new OTP has been sent.',
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
      style={styles.container}
    >

      <LinearGradient
        colors={[
          '#000000',
          '#050505',
          '#000000',
        ]}
        style={styles.gradient}
      >

        <View style={styles.card}>

          {/* TITLE */}

          <Text style={styles.title}>
            Enter OTP
          </Text>

          {/* SUBTITLE */}

          <Text style={styles.subtitle}>
            Enter the 6 digit code sent
          </Text>

          <Text style={styles.email}>
            to {email}
          </Text>

          {/* OTP INPUTS */}

          <View style={styles.otpContainer}>

            {otp.map((digit, index) => (

              <TextInput
                key={index}
                ref={ref => {
                  if (ref) {
                    inputs.current[index] = ref;
                  }
                }}
                value={digit}
                onChangeText={text =>
                  handleChange(text, index)
                }
                onKeyPress={e =>
                  handleKeyPress(e, index)
                }
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpInput}
              />

            ))}

          </View>

          {/* VERIFY BUTTON */}

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={handleVerify}
          >

            <LinearGradient
              colors={[
                '#12D8D8',
                '#13B8C6',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.button}
            >

              <Text style={styles.buttonText}>
                Verify
              </Text>

            </LinearGradient>

          </TouchableOpacity>

          {/* RESEND */}

          <TouchableOpacity
            activeOpacity={
              seconds > 0
                ? 1
                : 0.7
            }
            onPress={handleResend}
            disabled={seconds > 0}
          >

            <Text
              style={[
                styles.resend,

                seconds > 0 &&
                  styles.resendDisabled,
              ]}
            >

              {seconds > 0
                ? `Resend in ${seconds} sec`
                : 'Resend OTP'}

            </Text>

          </TouchableOpacity>

        </View>

      </LinearGradient>

    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  card: {
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 30,
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderWidth: 1,
    borderColor: '#151515',
  },

  title: {
    color: '#FFF',
    fontSize: 46,
    fontWeight: '900',
    marginBottom: 20,
  },

  subtitle: {
    color: '#F1F1F1',
    fontSize: 18,
    lineHeight: 30,
  },

  email: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 35,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 35,
  },

  otpInput: {
    width: 50,
    height: 70,
    borderRadius: 14,
    backgroundColor: '#F3F3F3',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '800',
    color: '#000',
    marginHorizontal: 6,
  },

  button: {
    height: 76,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '900',
  },

  resend: {
    color: '#11D7D7',
    textAlign: 'center',
    marginTop: 28,
    fontSize: 16,
    textDecorationLine: 'underline',
  },

  resendDisabled: {
    opacity: 0.45,
    textDecorationLine: 'none',
  },

});

export default OtpVerificationScreen;