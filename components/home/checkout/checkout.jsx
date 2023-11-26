import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import eventDetailsData from '../eventdetails/eventdetailsdata';
import BuyButton from '../../buttons/BuyButton';
import BackButton from '../../buttons/BackButton';
import BuyNowButton from '../../buttons/BuyNowButton';
import BankTransferButton from '../../buttons/BankTransferButton';
import CardPaymentButton from '../../buttons/CardPaymentButton';

const Checkout = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <BackButton onPress={() => console.log('Go back')} />
      <Text style={styles.titleText}>Checkout</Text>

      {/* Background Photo */}
      <Image
        source={require('../../../assets/images/alex.jpg')} // Replace with your background photo
        style={styles.backgroundPhoto}
      />

      {/* Event Details */}
      <View style={styles.detailsContainer}>
        {/* Event Name */}
        <Text style={styles.text}>{eventDetailsData.eventName}</Text>

        {/* Date */}
        <View style={styles.detailRow}>
          <Image source={require('../../../assets/icons/Date.png')} style={styles.icon} />
          <Text style={styles.text}>{eventDetailsData.eventDate}</Text>
        </View>

        {/* Location */}
        <View style={styles.detailRow}>
          <Image source={require('../../../assets/icons/Location2.png')} style={styles.icon} />
          <Text style={[styles.text, styles.labelText]}>
            {eventDetailsData.eventLocation}
          </Text>
        </View>

        {/* Subtotal and Tax */}
        <View style={styles.detailRow}>
          <Text style={styles.labelText}>Subtotal:</Text>
          <Text style={styles.text}>{eventDetailsData.subtotal}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.labelText}>Tax:</Text>
          <Text style={styles.text}>{eventDetailsData.tax}</Text>
        </View>

        {/* Price */}
        <View style={styles.detailRow}>
          <Text style={styles.labelText}>Price</Text>
          <Text style={styles.text}>{eventDetailsData.eventPrice}</Text>
        </View>

        {/* Bank Transfer and Card Payment buttons */}
        <View style={styles.buttonContainer}>
          <BankTransferButton />
          <CardPaymentButton />
        </View>

        {/* Buy Button */}
        <BuyNowButton />

        {/* Additional Buy Button */}
        <View style={styles.buyButtonContainer}>
          <BuyButton />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // ... (other styles)
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backgroundPhoto: {
    width: '100%',
    height: '25%',
    resizeMode: 'cover',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 8, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  labelText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginRight: 10,
    marginTop: -8
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  buyButtonContainer: {
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -50,
  },
});

export default Checkout;
