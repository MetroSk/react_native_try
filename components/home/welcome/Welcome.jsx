import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import styles from './welcome.style';
import { icons, SIZES, COLORS } from '../../../constants';
import ApplyButton from '../../buttons/ApplyButton'; // Adjust the path accordingly
import ResetButton from '../../buttons/Resetbutton';
import PriceSelect from '../../sliders/PriceSelect.js';
import Slider from '@react-native-community/slider';

const jobTypes = ['Sports', 'Music', 'Food','Art'];
const locations = ['Kaunas', 'Vilnius', 'Klaipeda'];
const dateButtons = ['Today', 'Tomorrow', 'This Week', 'This Month'];

const Welcome = ({
  searchTerm,
  setSearchTerm,
  handleCategoryClick,
  handleLocationChange,
  handleDateButtonClick,
}) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeDateButton, setActiveDateButton] = useState(null);
  const handleApplyPress = () => {
    // Handle the apply button press logic here
    console.log('Apply button pressed!');
  };
  const handleResetPress =() =>{
    console.log('Reset button pressed');
  }

  return (
    <View>
      {/* Existing code... */}

      {/* Text below the search bar */}
      <Text style={styles.categoryText}>Category</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {jobTypes.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.tab(activeJobType === item),
                { backgroundColor: activeJobType === item ? COLORS.green : COLORS.white },
              ]}
              onPress={() => handleCategoryPress(item)}
            >
              <Image
                source={icons[item.toLowerCase()]}
                resizeMode="contain"
                style={styles.categoryImage}
              />
              <Text style={styles.tabText(activeJobType === item)}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Text below the search bar */}
      <Text style={styles.categoryText}>Date</Text>

      {/* Date buttons wrapped in a ScrollView */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.tabsContainer}>
          {dateButtons.map((date) => (
            <TouchableOpacity
              key={date}
              style={[
                styles.tab(activeDateButton === date),
                { backgroundColor: activeDateButton === date ? COLORS.green : COLORS.white },
              ]}
              onPress={() => handleDatePress(date)}
            >
              <Text style={styles.tabText(activeDateButton === date)}>{date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Text style={styles.categoryText}>Location</Text>
      </View>
      {/* Custom container for location icon and text in the Picker */}
      <View style={styles.locationPicker}>
        <Image
          source={icons.location} // Assuming 'location.png' is available in your icons
          resizeMode="contain"
          style={styles.tabImage} // Adjust the size as needed
        />
        <Picker
          selectedValue={selectedLocation}
          onValueChange={(itemValue) => {
            setSelectedLocation(itemValue);
            handleLocationChange(itemValue);
          }}
          style={{ textAlign: 'justify' }}
          itemStyle={{ textAlign: 'justify' }}
        >
          {locations.map((location) => (
            <Picker.Item key={location} label={location} value={location} />
          ))}
        </Picker>
        
      </View>

      {/* ApplyButton component at the bottom */}
      <PriceSelect/>
      <ApplyButton onPress={handleApplyPress} />
      <ResetButton onPress={handleResetPress} />
    </View>
  );
};

export default Welcome;