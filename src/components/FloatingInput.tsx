import React, { useEffect, useRef, useState } from 'react';

import {
  Animated,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
} from 'react-native';

interface FloatingInputProps extends TextInputProps {
  label: string;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  label,
  value,
  onFocus,
  onBlur,
  ...props
}) => {

  const [isFocused, setIsFocused] =
    useState(false);

  const animatedValue =
    useRef(new Animated.Value(value ? 1 : 0))
      .current;

  useEffect(() => {

    Animated.timing(animatedValue, {
      toValue:
        isFocused || value ? 1 : 0,
      duration: 220,
      useNativeDriver: false,
    }).start();

  }, [isFocused, value]);

  const labelStyle = {

    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -10],
    }),

    left: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 10],
    }),

    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 11],
    }),

    color: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['#7A7A7A', '#20D3C2'],
    }),

  };

  return (
    <View style={styles.container}>

      <Animated.Text
        style={[styles.label, labelStyle]}
      >
        {label}
      </Animated.Text>

      <TextInput
        {...props}
        value={value}
        style={styles.input}
        placeholder=""
        placeholderTextColor="#666"
        onFocus={(e) => {

          setIsFocused(true);

          onFocus && onFocus(e);

        }}
        onBlur={(e) => {

          setIsFocused(false);

          onBlur && onBlur(e);

        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    marginTop: 14,
    position: 'relative',
  },

  label: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#000',
    paddingHorizontal: 6,
    fontWeight: '600',
  },

  input: {
    height: 52,
    borderWidth: 1.4,
    borderColor: '#2B2B2B',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#FFF',
    fontSize: 14,
    backgroundColor: '#050505',
  },

});

export default FloatingInput;