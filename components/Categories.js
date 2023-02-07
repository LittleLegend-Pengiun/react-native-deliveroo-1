import {  ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import GlobalItem from './GlobalItem';
import Loading from './Loading';

const Categories = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try{
      const res = await fetch(`http://${GlobalItem.localIP}:8000/categories`)
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
      {loading ? 
        <Loading /> :
        data?.map(item => {
          return (
            <CategoryCard 
              key={item.id}
              imgurl={{uri: item.imgurl}}
              title={item.title}
            />
          )
        })
      }

    </ScrollView>
  )
}

export default Categories