import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ArrowLeftCircleIcon, ArrowLeftIcon } from 'react-native-heroicons/solid';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {params: {
        id,
        imgurl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    }} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    })
  return (
    <ScrollView className="bg-inherit">
      <View className="relative">
        <Image 
         className="w-full h-56 bg-gray-600 p-4"
         source={{uri: imgurl}}
        />
        <TouchableOpacity 
         className="absolute top-12 left-5 p-2 bg-gray-100 rounded-full"
         onPress={navigation.goBack}
        >
            <ArrowLeftIcon size={20} color="#00CCBB"/>
        </TouchableOpacity>
      </View>
      <View className="bg-white">
        <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen