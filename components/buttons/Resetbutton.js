// ResetButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ResetButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={onPress}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#40DA46', // Change to your desired color
    padding: 14, // Updated to match the apply button
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -53, // Adjust the margin as needed
    marginLeft: 160, // Adjust the margin to position it on the right side
  },
  resetButtonText: {
    color: '#FFFFFF', // Optional: Set text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ResetButton;
