import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import GlobalItem from '../components/GlobalItem';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon, MagnifyingGlassIcon, UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';
import FeatureRows from '../components/FeatureRows';
import Loading from '../components/Loading';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try{
      const res = await fetch(`http://${GlobalItem.localIP}:8000/all_features`)
      const item = await res.json();
      setData(item);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {fetchData()}, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }
    )
  }, []);

  return (
    <SafeAreaView>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
         source={{
          uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'
         }}
         className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Deliver Now!
          </Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={28} color="#00CCBB"/>
          </Text>
        </View>

        <UserIcon size={35} color="#00CCBB"/>
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 self-center">
          <MagnifyingGlassIcon size={20} color="#00CCBB" className="self-center" />
          <TextInput 
           placeholder='Restaurant and cuisine'
           keyboardType='default'
           className="pl-1 self-center"
          />
        </View>

        <AdjustmentsVerticalIcon size={35} color="#00CCBB" className="self-center"/>
      </View>

      {/* Body */}
      <ScrollView 
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        {/*Categories*/}
        <Categories />

        {/* Feature rows */}
        {loading 
          ? <Loading />
          : data?.map(item => {
            return (
              <FeatureRows 
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                itemList={item.itemlist}
              />
            )
          })
        }
        {}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen