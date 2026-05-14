import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

interface GlowButtonProps {
  text: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const GlowButton: React.FC<GlowButtonProps> = ({
  text,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <LinearGradient
        colors={[
          '#14B8A6',
          '#2DD4BF',
          '#5EEAD4',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={[styles.text, textStyle]}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',

    shadowColor: '#2DD4BF',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 18,

    elevation: 10,
  },

  gradient: {
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#031311',
    fontWeight: '900',
    fontSize: 15,
    letterSpacing: 1.5,
  },
});

export default GlowButton;