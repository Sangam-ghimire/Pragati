import React from 'react'
import { View, FlatList } from 'react-native'
import CatagoriesCard from './CatagoriesCard'
import { catagories } from '../assets/data'

function Catagories() {

  const RenderItem = ({ item }) => {
    return (
      <CatagoriesCard image={item.image} title={item.title} />
    )
  };

  return (
    <View>
      <FlatList
        data={catagories}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />

    </View>
  )
}

export default Catagories 