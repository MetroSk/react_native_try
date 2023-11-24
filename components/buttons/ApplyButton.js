// ApplyButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ApplyButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.applyButton} onPress={onPress}>
      <Text style={styles.applyButtonText}>Apply</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  applyButton: {
    backgroundColor: '#40DA46', // Updated color
    padding: 14,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100, // Adjust the margin as needed
    marginRight: 180
  },
  applyButtonText: {
    color: '#FFFFFF', // Optional: Set text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ApplyButton;
