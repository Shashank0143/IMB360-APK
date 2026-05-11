import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import NeonCard from '../components/NeonCard';
import GlowButton from '../components/GlowButton';

import { RootState } from '../store';
import { setUserType } from '../store/slices/authSlice';

const RoleSelectionScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const userType = useSelector(
    (state: RootState) => state.auth.userType,
  );

  const isBrand = userType === 'brand';

  const handleContinue = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(45,212,191,0.12)',
          'rgba(0,0,0,0)',
          'rgba(168,85,247,0.08)',
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.backgroundGlow}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.heading}>
            Choose Your Identity
          </Text>

          <Text style={styles.subHeading}>
            Join the platform and start building meaningful collaborations.
          </Text>
        </View>

        {/* BRAND */}
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={() => dispatch(setUserType('brand'))}
          style={{ zIndex: isBrand ? 2 : 1 }}
        >
          <NeonCard
            title="I'M A"
            type="BRAND"
            description="Scale campaigns and connect with creators that align with your brand vision."
            imageSource={require('../assets/images/brand.jpeg')}
            isActive={isBrand}
            typeColor="#2DD4BF"
            primaryGlowColor="rgba(45,212,191,0.22)"
          />
        </TouchableOpacity>

        {/* CREATOR */}
        <TouchableOpacity
          activeOpacity={0.92}
          onPress={() => dispatch(setUserType('creator'))}
          style={[
            styles.overlapContainer,
            {
              zIndex: !isBrand ? 2 : 1,
            },
          ]}
        >
          <NeonCard
            title="I'M A"
            type="CREATOR"
            description="Collaborate with top brands and grow your audience with premium partnerships."
            imageSource={require('../assets/images/creator.jpeg')}
            isActive={!isBrand}
            typeColor="#A855F7"
            primaryGlowColor="rgba(168,85,247,0.22)"
          />
        </TouchableOpacity>

        {/* INFO */}
        <View style={styles.infoContainer}>
          <Text style={styles.mainLabel}>
            Continue as{' '}
            <Text style={styles.highlight}>
              {userType.toUpperCase()}
            </Text>
          </Text>

          <Text style={styles.subLabel}>
            {isBrand
              ? 'Find creators, launch campaigns, and grow your brand presence.'
              : 'Partner with brands, monetize your audience, and expand your reach.'}
          </Text>
        </View>

        <GlowButton
          text={`JOIN AS ${userType.toUpperCase()}`}
          onPress={handleContinue}
        />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignIn')}
          >
            <Text style={styles.loginLink}>
              {' '}Login
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#020202',
  },

  backgroundGlow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 35,
    alignItems: 'center',
  },

  header: {
    width: '100%',
    marginBottom: 35,
  },

  heading: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: -1,
  },

  subHeading: {
    color: '#8A8A8A',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 12,
  },

  overlapContainer: {
    marginTop: -38,
  },

  infoContainer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 30,
    paddingHorizontal: 12,
  },

  mainLabel: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: -0.5,
  },

  highlight: {
    color: '#2DD4BF',
  },

  subLabel: {
    color: '#8B8B8B',
    textAlign: 'center',
    marginTop: 14,
    fontSize: 14,
    lineHeight: 24,
  },

  footer: {
    flexDirection: 'row',
    marginTop: 26,
    alignItems: 'center',
  },

  footerText: {
    color: '#707070',
    fontSize: 13,
  },

  loginLink: {
    color: '#FFFFFF',
    fontWeight: '800',
    fontSize: 13,
  },
});

export default RoleSelectionScreen;