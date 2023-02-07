import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View className="bg-inherit flex-row justify-center pt-5">
        <ActivityIndicator className="self-center" size={40} color="#00CCBB"/>
        <Text className="text-xl font-bold ml-2 self-center">Loading...</Text>
    </View>
  )
}

export default Loading