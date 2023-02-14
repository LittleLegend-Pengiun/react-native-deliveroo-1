import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Basket")
        }, 3000)
    }, [])

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
        <Animatable.Image 
         source={require('../assets/image_processing20190821-17803-12pij7c.gif')}
         animation='slideInUp'
         iterationCount={1}
         className="w-96 h-96"
        />

        <Animatable.Text
         animation='slideInUp'
         iterationCount={1}
         className="text-lg text-white font-bold text-center my-10"
        >
            Waiting for restaurant to accept your order...
        </Animatable.Text>

        <Progress.Circle 
         size={50} 
         indeterminate={true} 
         color='white'
        />
    </SafeAreaView>
  )
}

export default PreparingScreen;