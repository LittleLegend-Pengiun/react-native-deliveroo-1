import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/bastketSlice'
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';

const BasketIcon = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const navigation = useNavigation();
    return (
        <View className="absolute bottom-10 w-full z-50 opacity-90">
            <TouchableOpacity className="bg-teal-400 mx-5 p-4 rounded-lg flex-row items-center space-x-2">
                <Text className="text-white text-lg font-extrabold bg-emerald-600 py-1 px-2 rounded">
                    {items.length}
                </Text>
                <Text className="flex-1 text-white font-extrabold text-lg text-center">View basket</Text>
                <Text className="text-white text-lg font-extrabold">
                    <Currency quantity={basketTotal} currency='GBP'/>
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default BasketIcon