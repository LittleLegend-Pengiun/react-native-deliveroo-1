import { View, Image, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
     className="bg-inherit"
     horizontal
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
     }}
    >
        {/*Category cards */}
        <CategoryCard imgurl={require("../assets/sushi-place.jpg")} title="Testing"/>
        <CategoryCard imgurl={require("../assets/1.png")}  title="Testing"/>
        <CategoryCard imgurl={require("../assets/1.png")}  title="Testing"/>
        <CategoryCard imgurl={require("../assets/sushi-place.jpg")} title="Testing"/>
        <CategoryCard imgurl={require("../assets/sushi-place.jpg")} title="Testing"/>
        <CategoryCard imgurl={require("../assets/sushi-place.jpg")} title="Testing"/>

    </ScrollView>
  )
}

export default Categories