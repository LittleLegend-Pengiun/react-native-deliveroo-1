import { View, Text } from 'react-native'
import React from 'react';
import { StatusBar } from 'expo-status-bar';

const Test = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white-0 ">
      <Text className="text-cyan-700">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default Test