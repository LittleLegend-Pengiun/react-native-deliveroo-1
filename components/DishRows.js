import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Currency from 'react-currency-formatter';
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRows = ({id, name, description, imgurl, price}) => {
    const [isPress, setIsPress] = useState(false);
  return (
    <>
    <TouchableOpacity 
     onPress={() => setIsPress(!isPress)}
     className={`bg-white border p-4 border-gray-200 
      ${isPress && "border-b-0"}`
     }>
        <View className="flex-row">
            <View className="flex-1 pr-2">
                <Text className="text-lg mb-1">{name}</Text>
                <Text className="text-gray-400">{description}</Text>
                <Text className="text-gray-400 mt-2">
                    <Currency quantity={price} currency='GBP'/>
                </Text>
            </View>
            <View>
                <Image source={{
                    uri: imgurl
                }} className="h-20 w-20 bg-gray-300 p-4 border border-gray-100"
                />
            </View>
        </View>
    </TouchableOpacity>
    
    {isPress && (
        <View className="bg-white px-4">
            <View className="flex-row items-center space-x-2 pb-3">
                <TouchableOpacity className="bg-inherit">
                    <MinusCircleIcon size={40} color="#00CCBB"/>
                </TouchableOpacity>
                
                <Text>0</Text>
                
                <TouchableOpacity className="bg-inherit">
                    <PlusCircleIcon size={40} color="#00CCBB"/>
                </TouchableOpacity>
            </View>
        </View>
    )}
    </>
  )
}

export default DishRows