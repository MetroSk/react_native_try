// EventDetails.jsx
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import eventDetailsData from './eventdetailsdata';
import BuyButton from '../../buttons/BuyButton';
import BackButton from '../../buttons/BackButton';
import ShareButton from '../../buttons/ShareButton';

const EventDetails = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <ShareButton onPress={() => console.log('Share pressed')}  />
      <BackButton onPress={() => console.log('Go back')} />
      <Text style={styles.titleText}>Event Details</Text>

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
          <Text style={[styles.text, styles.labelText]}> { /* Add styles.labelText here */}
            {eventDetailsData.eventLocation}
          </Text>
        </View>

        {/* Price */}
        <View style={styles.detailRow}>
          <Text style={styles.labelText}>Price</Text>
          <Text style={styles.text}>{eventDetailsData.eventPrice}</Text>
        </View>

        <View>
          <Text style={styles.labelText}>Event Description</Text>
        </View>

        {/* Event Description */}
        <View style={styles.detailRow}>
          <Text style={styles.text}>{eventDetailsData.eventDescription}</Text>
        </View>

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
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start', // Align content to the top
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
    marginRight: 16, // Adjust the margin to move text to the left
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  buyButtonContainer: {
    marginTop: 10,
  },
});

export default EventDetails;
