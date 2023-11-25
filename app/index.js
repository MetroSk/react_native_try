import {useState} from 'react'; 
import {View, ScrollView, SafeAreaView} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import {
    Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome }
 from '../components';
import EventDetails from '../components/home/eventdetails/eventdetails';
const Home = () => {
    const router = useRouter();
    return(
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
        <Stack.Screen 
        options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
            headerShadowVisible: false,

            headerLeft: () =>(

                <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () =>(

                <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "Filter"
        }}
        />

        <ScrollView showsVerticalScrollIndicator={true}>
<View
    style={{
        flex: 1,
        padding: SIZES.medium
    }}
    >
    <EventDetails

    />



</View>

        </ScrollView>
    </SafeAreaView>
    )
}

export default Home;
