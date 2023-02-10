import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    ArrowLeftIcon,
    StarIcon,
    ChevronRightIcon,
    MapPinIcon,
    QuestionMarkCircleIcon
} from 'react-native-heroicons/solid';
import DishRows from '../components/DishRows';

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
            <View className="flex-row space-x-2 my-2">
                <View className="flex-row space-x-1 items-center">
                    <StarIcon color="green" opacity={0.5} size={22}/>
                    <Text className="text-gray-400">
                        <Text className="text-green-500">{rating}</Text> . {genre}
                    </Text>
                </View>

                <View className="flex-row space-x-1 items-center">
                    <MapPinIcon color="gray" opacity={0.4} size={22}/>
                    <Text className="text-gray-400">
                        <Text className="text-gray-500">Nearby . {address}</Text>
                    </Text>
                </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.6} className="self-center" />
            <Text className="flex-1 text-md font-bold self-center">Have a food alergy?</Text>
            <ChevronRightIcon className="self-center" color="#00CCBB"/>
        </TouchableOpacity>
      </View>

      <View>
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu </Text>

        {/* Dish Menu */}
        <DishRows 
         key={1}
         id={1}
         name="Dish"
         description="Desc DescDescDescDescDescDescDescDescDescDescDesc"
         imgurl="https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg"
         price={55}
        />
        <DishRows 
         key={2}
         id={1}
         name="Dish"
         description="Desc DescDescDescDescDescDescDescDescDescDescDesc"
         imgurl="https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg"
         price={55}
        /><DishRows 
        key={3}
        id={1}
        name="Dish"
        description="Desc DescDescDescDescDescDescDescDescDescDescDesc"
        imgurl="https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg"
        price={55}
       />
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen