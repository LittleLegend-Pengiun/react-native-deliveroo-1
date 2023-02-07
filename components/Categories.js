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
        <CategoryCard imgurl={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}} title="Testing"/>
        <CategoryCard imgurl={{uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'}}  title="Testing"/>
        <CategoryCard imgurl={{uri: 'https://images.prismic.io/dbhq-deliveroo-riders-website/ed825791-0ba4-452c-b2cb-b5381067aad3_RW_hk_kit_importance.png?auto=compress,format&rect=0,0,1753,1816&w=1400&h=1450'}}  title="Testing"/>
        <CategoryCard imgurl={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}} title="Testing"/>
        <CategoryCard imgurl={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}} title="Testing"/>
        <CategoryCard imgurl={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/3b/00/06/sushi-place.jpg'}} title="Testing"/>

    </ScrollView>
  )
}

export default Categories