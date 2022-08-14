import { View, FlatList, StyleSheet, ScrollView, Text, TouchableHighlight, Pressable } from 'react-native'
import Content from '../components/Content';
import { DATA } from '../assets/data';
import Catagories from '../components/Catagories';
// import Signup from './form/Signup';
// import Ar from './Ar/Ar';


export default function Explore({ naviagtion }) {
  const RenderItem = ({ item }) => (
    <Content image={item.image} video={item.video} title={item.title} author={item.author} />
  );
  return (
    <ScrollView style={{ marginTop: 30 }}>
      <Text style={{ fontWeight: 'bold' }} >Catagories</Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 20
        }}
      />
      <Catagories />
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginVertical: 20
        }}
      />

      <FlatList
        data={DATA}
        renderItem={RenderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />


      {/* <Signup /> */}
    </ScrollView>
  )
}
