import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../features/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/bastketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { ScrollView } from 'react-native-gesture-handler'
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const total = useSelector(selectBasketTotal);
  const items = useSelector(selectBasketItems);
  const [groupedItemInBasket, setGroupedItemInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemInBasket(groupItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 bg-white">
        <View className="flex-1 bg-gray-100">
          <View className="p-5 border-b border-[#00CCBB] bg-white shadow-xs">
            <View>
              <Text className="text-lg font-bold text-center">Basket</Text>
              <Text className="text-center text-gray-500">{restaurant.title}</Text>
            </View>

            <TouchableOpacity
             onPress={navigation.goBack}
             className="rounded-full bg-gray-100 absolute top-3 right-8"
            >
              <XCircleIcon color="#00CCBB" height={45} width={45}/>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-3">
            <Image 
             source={{
              uri: "https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450"
             }}
             className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            />
            <Text className="flex-1">Deliver in 50 - 70 mins</Text>
            <TouchableOpacity>
              <Text className="text-[#00CCBB] font-bold">Change</Text>
            </TouchableOpacity>
          </View>

          <ScrollView className="divide-y divide-gray-200">
            {Object.entries(groupedItemInBasket).map(([key, item]) => 
              (
                <View key={key}
                 className="flex-row bg-white items-center space-x-3 py-2 px-5"
                >
                  <Text className="text-lg font-bold">{item.length} x </Text>
                  <Image 
                  source={{ uri: item[0]?.imgurl}}
                  className="h-12 w-12 rounded-full"
                  />
                  <Text className="flex-1">{item[0]?.name}</Text>
                  <Text>
                    <Currency quantity={item[0]?.price} currency='GBP'/>
                  </Text>

                  <TouchableOpacity>
                    <Text 
                    className="text-xs text-red-500 font-bold"
                    onPress={() => dispatch(removeFromBasket({id: parseInt(key)}))}>
                      Remove
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            )}
          </ScrollView>

          <View className="p-5 bg-white mt-5 space-y-4">
            <View className="flex-row justify-between">
              <Text className="text-gray-400">Subtotal</Text>
              <Text className="text-gray-400">
                <Currency quantity={total} currency='GBP'/>
              </Text>
            </View>

            <View className="flex-row justify-between">
              <Text className="text-gray-400">Delivery fee</Text>
              <Text className="text-gray-400">
                <Currency quantity={5.99} currency='GBP'/>
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="font-bold">Total</Text>
              <Text className="font-extrabold">
                <Currency quantity={total + 5.99} currency='GBP'/>
              </Text>
            </View>
            <TouchableOpacity 
             onPress={() => navigation.navigate("Preparing")}
             className="rounded-lg bg-[#00CCBB] p-4 justify-center items-center">
              <Text className="text-center text-white text-lg font-bold">
                Place Order
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen