import { useRoute } from '@react-navigation/native';
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { DATA } from '../assets/data'
import Card from '../components/Card';

function CategorySpecific() {
  const route = useRoute();
  const { category } = route.params;
  const RenderItem = ({ item }) => {
    if (item.category == category) {
      return (
        <Card title={item.title} link={item.video} author={item.author} />
      )
    }
  };
  return (
    <FlatList
      data={DATA}
      renderItem={RenderItem}
      keyExtractor={item => item.id}
      numColumns={1}
    />
  )
}

export default CategorySpecific