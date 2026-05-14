import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

interface Props {
  title: string;
  image: any;
}

const SocialButton: React.FC<Props> = ({
  title,
  image,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={image}
        style={styles.icon}
      />

      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    width: '47%',
    height: 52,

    borderWidth: 1,
    borderColor: '#2B2B2B',
    borderRadius: 30,
  },

  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    marginRight: 10,
  },

  text: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 15,
  },
});

export default SocialButton;