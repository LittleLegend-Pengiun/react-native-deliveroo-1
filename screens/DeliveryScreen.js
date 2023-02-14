import { View, Text, TouchableOpacity, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">

            <View className="flex-row justify-center items-center p-5">
            <TouchableOpacity 
             onPress={() => navigation.navigate("Home")}
             className="flex-1"
            >
                <XMarkIcon color="white" size={40}/>
            </TouchableOpacity>  
            <Text 
             className="font-light text-white text-lg"
            >Order Help</Text>
            </View>

            <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                <View className="flex-row justify-between"> 
                    <View>
                        <Text className="text-lg text-gray-400">Estimate Arrival</Text>
                        <Text className="text-4xl font-bold">45 - 65 minutes</Text>
                    </View>
                    <Image 
                    source={{
                        uri: 'https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s'
                    }}
                    className="h-20 w-20"
                    />
                </View>
                <Progress.Bar size={30} color='#00CCBB' indeterminate={true}/>

                <Text className="mt-3 text-gray-500">
                    Your Order at {restaurant.title} is being prepared!
                </Text>
            </View>

      </SafeAreaView>

      <MapView
       initialRegion={{
        latitude: restaurant.lat,
        longitude: restaurant.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
       }}
       className="flex-1 -mt-10 z-0"
       mapType='muteStandard'
      >
        <Marker 
         coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long
         }}
         title={restaurant.title}
         description={restaurant.short_description}
         identifier='origin'
         pinColor='#00CCBB'
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-20">
        <Image 
         source={{
            uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
         }}
         className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
            <Text className='text-lg'>LittleLegend Penguin</Text>
            <Text className="text-gray-400">Your rider</Text>
        </View>
        <TouchableOpacity>
            <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default DeliveryScreen