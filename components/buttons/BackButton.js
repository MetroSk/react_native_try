// BackButton.js
import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BackButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={require('../../components/../assets/icons/BackButton.png')} // Update the path to your BackButton image
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'absolute',
    top: 4,
    left:10
  },
  image: {
    width: 25,
    height: 25,
  },
});

export default BackButton;
