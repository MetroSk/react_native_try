// ApplyButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BuyNowButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.applyButton} onPress={onPress}>
      <Text style={styles.applyButtonText}>Buy Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  applyButton: {
    backgroundColor: '#40DA46', // Updated color
    paddingVertical: 20, // Increased vertical padding
    paddingHorizontal: 90, // Increased horizontal padding
    borderRadius: 50, // Adjust the borderRadius as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 70, // Adjust the margin as needed
    marginRight: 10,
  },
  applyButtonText: {
    color: '#FFFFFF', // Optional: Set text color
    fontSize: 18,
    fontWeight: 'bold',
    
  },
});

export default BuyNowButton;
