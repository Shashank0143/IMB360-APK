import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

const ScreenWrapper = ({ children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />

      <View style={styles.inner}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

  inner: {
    flex: 1,
    paddingHorizontal: 24,
  },
});

export default ScreenWrapper;