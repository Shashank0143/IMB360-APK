import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
  onPress?: () => void;
}

const AuthButton: React.FC<Props> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
    >
      <LinearGradient
        colors={['#00C6D7', '#2BE38C']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        <Text style={styles.text}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#000',
    fontSize: 16,
    fontWeight: '800',
  },
});

export default AuthButton;