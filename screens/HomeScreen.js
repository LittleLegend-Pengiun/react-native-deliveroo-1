import { View, Text, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import GlobalStyle from '../components/GlobalStyle';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon, MagnifyingGlassIcon, UserIcon,
} from 'react-native-heroicons/outline'
import Categories from '../components/Categories';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    }
    )
  }, []);
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
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen