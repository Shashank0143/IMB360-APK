import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;

  value?: string;

  onChangeText?: (text: string) => void;
}

const AuthInput: React.FC<Props> = ({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.container}>

      <Text style={styles.label}>
        {label}
      </Text>

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#666"
        secureTextEntry={secureTextEntry}
        style={styles.input}

        value={value}
        onChangeText={onChangeText}
      />

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    marginBottom: 18,
  },

  label: {
    color: '#FFF',
    marginBottom: 8,
    fontSize: 15,
    fontWeight: '500',
  },

  input: {
    height: 54,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    borderRadius: 12,
    paddingHorizontal: 16,
    color: '#FFF',
    backgroundColor: '#050505',
  },

});

export default AuthInput;