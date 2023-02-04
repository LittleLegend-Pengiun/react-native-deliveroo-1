import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeatureRows = ({title, description, id}) => {
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
            <RestaurantCard 
                id={123}
                title="Yoi sushi"
                imgurl={require('../assets/sushi-place.jpg')}
                rating={4.5}
                genre="japanese"
                address="123 Main st"
                short_description="description"
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurantCard 
                id={123}
                title="Yoi sushi"
                imgurl={require('../assets/sushi-place.jpg')}
                rating={4.5}
                genre="japanese"
                address="123 Main st"
                short_description="description"
                dishes={[]}
                long={20}
                lat={0}
            />

            <RestaurantCard 
                id={123}
                title="Yoi sushi"
                imgurl={require('../assets/sushi-place.jpg')}
                rating={4.5}
                genre="japanese"
                address="123 Main st"
                short_description="description"
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}

export default FeatureRows