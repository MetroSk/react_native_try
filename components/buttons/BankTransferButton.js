// BankTransferButton.js
import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BankTransferButton = () => {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
  };

  return (
    <TouchableOpacity
      style={[
        styles.paymentButton,
        {
          backgroundColor: pressed ? '#40DA46' : 'transparent',
          borderColor: pressed ? 'transparent' : 'rgba(255, 255, 255, 0.08)',
        },
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, { color: pressed ? '#000000' : '#FFFFFF' }]}>
        Bank Transfer
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  paymentButton: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BankTransferButton;
