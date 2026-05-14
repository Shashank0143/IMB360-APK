import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { Shadow } from 'react-native-shadow-2';

const { width } = Dimensions.get('window');

interface NeonCardProps {
  title: string;
  type: string;
  description: string;
  imageSource: ImageSourcePropType;
  isActive: boolean;
  typeColor: string;
  primaryGlowColor: string;
}

const NeonCard: React.FC<NeonCardProps> = ({
  title,
  type,
  description,
  imageSource,
  isActive,
  typeColor,
  primaryGlowColor,
}) => {
  if (!isActive) {
    return (
      <View style={[styles.card, styles.inactiveCard]}>
        <Image
          source={imageSource}
          style={styles.imageInactive}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.inactiveTitle}>{title}</Text>

          <Text
            style={[
              styles.typeText,
              { color: `${typeColor}60` },
            ]}
          >
            {type}
          </Text>

          <Text style={styles.inactiveDesc}>
            {description}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <Shadow
      distance={24}
      startColor={primaryGlowColor}
      endColor="rgba(0,0,0,0)"
      offset={[0, 0]}
      containerStyle={styles.shadowContainer}
    >
      <LinearGradient
        colors={[
          'rgba(255,255,255,0.03)',
          'rgba(255,255,255,0.01)',
        ]}
        style={styles.activeCard}
      >
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text
            style={[
              styles.typeText,
              { color: typeColor },
            ]}
          >
            {type}
          </Text>

          <Text style={styles.description}>
            {description}
          </Text>
        </View>
      </LinearGradient>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    width: width * 0.86,
  },

  activeCard: {
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    backgroundColor: '#0A0A0A',
    padding: 22,
    overflow: 'hidden',
  },

  card: {
    width: width * 0.86,
    borderRadius: 28,
    backgroundColor: '#050505',
    padding: 22,
  },

  inactiveCard: {
    opacity: 0.38,
  },

  image: {
    width: '100%',
    height: 180,
    marginBottom: 12,
  },

  imageInactive: {
    width: '100%',
    height: 160,
    marginBottom: 10,
    opacity: 0.45,
  },

  textContainer: {
    alignItems: 'flex-start',
  },

  title: {
    color: '#F5F5F5',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 1,
  },

  inactiveTitle: {
    color: '#707070',
    fontSize: 15,
    fontWeight: '600',
  },

  typeText: {
    fontSize: 30,
    fontWeight: '900',
    marginTop: 2,
    marginBottom: 8,
    letterSpacing: 1,
  },

  description: {
    color: '#AFAFAF',
    fontSize: 13,
    lineHeight: 22,
  },

  inactiveDesc: {
    color: '#5F5F5F',
    fontSize: 12,
    lineHeight: 20,
  },
});

export default NeonCard;