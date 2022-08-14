import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { DATA } from '../assets/data'
import Card from '../components/Card'


function CatagorieSection({ navigation }) {
  const route = useRoute();
  const { video, title, author } = route.params;

  const RenderItem = ({ item }) => (
    <Card link={item.video} title={item.title} author={item.author} />
  );

  return (
    <ScrollView>
      <Card link={video} title={title} author={author} />
      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  )
}

export default CatagorieSection