import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const PriceSelect = () => {
  const [sliderValues, setSliderValues] = useState([0, 1000]);

  const handleSliderValuesChange = (values) => {
    setSliderValues(values);
  };

  const imagePaths = {
    music: require('../../assets/icons/sliderarrow.png'),
    sports: require('../../assets/icons/sliderarrow.png'),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Price Range</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.priceLabel}>
          Min Price: ${sliderValues[0]} - Max Price: ${sliderValues[1]}
        </Text>
        <MultiSlider
          values={sliderValues}
          min={0}
          max={300}
          step={10}
          onValuesChange={handleSliderValuesChange}
          sliderLength={300} // Adjust the slider length as needed
          snapped
          customMarker={(e) => {
            const index = e.currentValue === sliderValues[0] ? 0 : 1;
            return (
              <Image
                source={index === 0 ? imagePaths.music : imagePaths.sports}
                style={{ width: 30, height: 30 }}
              />
            );
          }}
          selectedStyle={{ backgroundColor: '#40DA46' }} // Set slider bar color
          unselectedStyle={{ backgroundColor: '#E0E0E0' }} // Set unselected slider bar color
          containerStyle={{ height: 40, width: 500 }} // Set the height and width of the slider container
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  sliderContainer: {
    marginTop: 0,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Center the text
    color: '#40DA46', // Set text color
  },
  priceLabel: {
    textAlign: 'center',
    marginTop: 20,
    color: '#40DA46', // Set text color
  },
});

export default PriceSelect;
