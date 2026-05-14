import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import MaskedView from '@react-native-masked-view/masked-view';

import {
  useNavigation,
} from '@react-navigation/native';

import {
  useDispatch,
} from 'react-redux';

import {
  setUserType,
} from '../store/slices/authSlice';

const { width, height } =
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
        <Text style={styles.roleTitle}>
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
            styles.roleTitle,
            { opacity: 0 },
          ]}
        >
          {text}
        </Text>

      </LinearGradient>

    </MaskedView>
  );
};

const RoleSelectionScreen = () => {

  const navigation = useNavigation<any>();

  const dispatch = useDispatch();

  const handleSelectRole = (
    role: 'brand' | 'creator',
  ) => {

    dispatch(setUserType(role));

    navigation.navigate('SignUp');

  };

  return (
    <View style={styles.container}>

      <StatusBar
        backgroundColor="#000"
        barStyle="light-content"
      />

      {/* BRAND SECTION */}

      <View style={styles.topSection}>

        <View style={styles.contentRow}>

          {/* IMAGE */}

          <Image
            source={require('../assets/images/brand.jpeg')}
            style={styles.brandImage}
            resizeMode="contain"
          />

          {/* TEXT */}

          <View style={styles.textContainer}>

            <Text style={styles.smallTitle}>
              I'M A
            </Text>

            <GradientText
              text="BRAND"
              colors={[
                '#00CFFF',
                '#41FF7A',
              ]}
            />

            <Text style={styles.description}>
              Scale your campaigns and
              find the perfect creators
              for your brand.
            </Text>

            {/* BUTTON */}

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                handleSelectRole('brand')
              }
            >

              <LinearGradient
                colors={[
                  '#00CFFF',
                  '#41FF7A',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.joinButton}
              >

                <Text style={styles.joinText}>
                  JOIN AS BRAND
                </Text>

              </LinearGradient>

            </TouchableOpacity>

            {/* LOGIN */}

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(
                  'SignIn',
                )
              }
            >

              <Text style={styles.loginText}>
                Login
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </View>

      {/* CENTER DIVIDER */}

      <View style={styles.centerDivider}>

        <View style={styles.dividerLineLeft} />

        <View style={styles.dividerCircle} />

        <View style={styles.dividerLineRight} />

      </View>

      {/* CREATOR SECTION */}

      <View style={styles.bottomSection}>

        <View style={styles.contentRowReverse}>

          {/* TEXT */}

          <View style={styles.textContainerCreator}>

            <Text style={styles.smallTitle}>
              I'M A
            </Text>

            <GradientText
              text="CREATOR"
              colors={[
                '#C850FF',
                '#00D5FF',
              ]}
            />

            <Text style={styles.description}>
              Partner with top brands
              and grow your influence.
            </Text>

            {/* BUTTON */}

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                handleSelectRole(
                  'creator',
                )
              }
            >

              <LinearGradient
                colors={[
                  '#C850FF',
                  '#00D5FF',
                ]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.joinButton}
              >

                <Text style={styles.joinText}>
                  JOIN AS CREATOR
                </Text>

              </LinearGradient>

            </TouchableOpacity>

            {/* LOGIN */}

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={() =>
                navigation.navigate(
                  'SignIn',
                )
              }
            >

              <Text style={styles.loginText}>
                Login
              </Text>

            </TouchableOpacity>

          </View>

          {/* IMAGE */}

          <Image
            source={require('../assets/images/creator.jpeg')}
            style={styles.creatorImage}
            resizeMode="contain"
          />

        </View>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 18,
    justifyContent: 'center',
  },

  topSection: {
    width: '100%',
    marginBottom: 26,
  },

  bottomSection: {
    width: '100%',
    marginTop: 26,
  },

  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentRowReverse: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brandImage: {
    width: width * 0.42,
    height: height * 0.25,
  },

  creatorImage: {
    width: width * 0.42,
    height: height * 0.25,
  },

  textContainer: {
    width: width * 0.42,
    justifyContent: 'center',
  },

  textContainerCreator: {
    width: width * 0.42,
    justifyContent: 'center',
  },

  smallTitle: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 4,
  },

  roleTitle: {
    fontSize: 30,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  description: {
    color: '#A8A8A8',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 10,
    marginBottom: 18,
  },

  joinButton: {
    height: 46,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  joinText: {
    color: '#000',
    fontWeight: '900',
    fontSize: 13,
    letterSpacing: 0.5,
  },

  loginButton: {
    height: 44,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#B026FF',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#050505',
  },

  loginText: {
    color: '#D4D4D4',
    fontWeight: '800',
    fontSize: 14,
  },

  centerDivider: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dividerLineLeft: {
    flex: 1,
    height: 2,
    backgroundColor: '#00D5FF',
    marginRight: 14,
  },

  dividerLineRight: {
    flex: 1,
    height: 2,
    backgroundColor: '#E14DFF',
    marginLeft: 14,
  },

  dividerCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 3,
    borderColor: '#C850FF',
    backgroundColor: '#000',
  },

});

export default RoleSelectionScreen;