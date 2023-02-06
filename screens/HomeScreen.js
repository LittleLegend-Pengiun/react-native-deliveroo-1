import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../components/GlobalStyle';
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

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }
    )
  }, []);

  const fetchData = async () => {
    try{
      const res = await fetch('http://192.168.1.2:8000/all_features')
      const item = await res.json();
      setData(item);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {fetchData()}, [])
  


  return (
    <SafeAreaView className={GlobalStyle.droidSafeArea}>
      {/* Header */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
         source={require('../assets/1.png')}
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
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="#00CCBB" />
          <TextInput 
           placeholder='Restaurant and cuisine'
           keyboardType='default'
           className="pl-1"
          />
        </View>

        <AdjustmentsVerticalIcon size={35} color="#00CCBB"/>
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
            />
          )})
        }
        {}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen