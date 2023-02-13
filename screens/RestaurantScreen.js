import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { 
    ArrowLeftIcon,
    StarIcon,
    ChevronRightIcon,
    MapPinIcon,
    QuestionMarkCircleIcon
} from 'react-native-heroicons/solid';
import DishRows from '../components/DishRows';
import GlobalItem from '../components/GlobalItem';
import Loading from '../components/Loading';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const [dish, setDish] = useState([]);
    const [loading, setLoading] = useState(true);

    const getDishes = async () => {
        try {
            const res = await fetch(`http://${GlobalItem.localIP}:8000/dishes`);
            const json = await res.json();
            setDish(json);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }

    }
    useEffect(() => {getDishes()}, []);
    
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
    <>
    <BasketIcon />
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

      <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu </Text>

        {/* Dish Menu */}
        {loading ? <Loading /> : dish?.map((item) => {
            return (
                <DishRows 
                 key={item.id}
                 id={item.id}
                 name={item.name}
                 description={item.description}
                 imgurl={item.imgurl}
                 price={item.price}
                />
            )
        })}
      </View>
    </ScrollView>
    </>
  )
}

export default RestaurantScreen