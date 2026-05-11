import React from 'react';

import {
  NavigationContainer,
} from '@react-navigation/native';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import RoleSelectionScreen from '../screens/RoleSelectionScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';

import { AuthStackParamList } from '../types/navigation';

const Stack =
  createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {

  return (
    <NavigationContainer>

      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >

        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
        />

        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
        />

        <Stack.Screen
          name="OtpVerification"
          component={OtpVerificationScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AuthNavigator;