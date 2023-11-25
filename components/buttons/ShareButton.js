// ShareButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const ShareButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('../../assets/icons/Share.png')} // Update the path to your Share image
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    position: 'absolute',
    top: -6,
    left: 250,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default ShareButton;
