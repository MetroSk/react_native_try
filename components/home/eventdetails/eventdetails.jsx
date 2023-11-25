// EventDetails.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import eventDetailsData from './eventdetailsdata';
import BuyButton from '../../buttons/BuyButton';

const EventDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Background Photo */}
      <Image
        source={require('../../../assets/images/alex.jpg')} // Replace with your background photo
        style={styles.backgroundPhoto}
      />
      
      {/* Event Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>Event Details</Text>

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
          <Text style={styles.text}>{eventDetailsData.eventLocation}</Text>
        </View>

        {/* Price */}
        <View style={styles.detailRow}>
          <Text style={styles.labelText}>Price</Text>
          <Text style={styles.text}>{eventDetailsData.eventPrice}</Text>
        </View>

        {/* Description */}
        <Text style={styles.text}>{eventDetailsData.eventDescription}</Text>

        {/* Buy Button */}
        <BuyButton />

        {/* Additional Buy Button */}
        <View style={styles.buyButtonContainer}>
          <BuyButton />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#404040', // Dark gray background
  },
  backgroundPhoto: {
    width: '100%',
    height: '25%', // Set the height to 25% of the screen
    resizeMode: 'cover',
  },
  detailsContainer: {
    position: 'relative',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    position: 'absolute',
    top: '50%', // Adjust as needed
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent', // Set the background to transparent
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
});

export default EventDetails;
