import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View className="bg-inherit flex-row justify-center pt-5">
        <ActivityIndicator size={40} color="#00CCBB"/>
        <Text className="text-xl font-bold">Loading...</Text>
    </View>
  )
}

export default Loading