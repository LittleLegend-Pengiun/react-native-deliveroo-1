import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import Loading from './Loading'
import GlobalItem from './GlobalItem'

function rearrangeItem (data, itemList) {
  let ret = []
  itemList.forEach(element => {
    const restaurant = data.find(item => item.id == element)
    ret.push(restaurant)
  });
  return ret;
}

const FeatureRows = ({title, description, id, itemList}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const fetchData = async () => {
    try{
      const res = await fetch(`http://${GlobalItem.localIP}:8000/restaurants`)
      const item = await res.json();
      setData(item);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {fetchData()}, []);

  return (
    <View className="bg-inherit">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">
            {title}
        </Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
        <Text className="text-xs text-gray-500 px-4">
            {description}
        </Text>
        <ScrollView
         horizontal
         contentContainerStyle={{
            paddingHorizontal: 15,
         }}
         showsHorizontalScrollIndicator={false}
         className="pt-4"
        >
            {/* Restaurant Card */}
            {loading ?
              <Loading /> :
              rearrangeItem(data, itemList)?.map(item => {
                return (
                  <RestaurantCard 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    imgurl={item.imgurl}
                    rating={item.rating}
                    genre={item.genre}
                    address={item.address}
                    short_description={item.short_description}
                    dishes={item.dishes}
                    long={item.long}
                    lat={item.lat}
                  />
                )
              })
            }
        </ScrollView>
    </View>
  )
}

export default FeatureRows