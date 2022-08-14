import React from 'react'
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Video from '../components/Video'
function Card({ route, navigation }) {
    const { link, title } = route.params
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: '#f2f0eb' }}>
                <Video link={link} />
                <View style={{ backgroundColor: '#f2f0eb' }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 5, marginTop: 5, height: 50 }}>{title}</Text>
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                        marginVertical: 5
                    }}
                />
                <View style={{ flexDirection: 'row', backgroundColor: '#f2f0eb', paddingBottom: 10, paddingTop: 10 }}>
                    <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' }} style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 5 }}></Image>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('AuthorProfile')
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 5 }}>Santosh Singh</Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: StyleSheet.hairlineWidth,
                    }}
                />

                <View style={{ flexDirection: 'row', marginLeft: 10 }}>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi inventore quam excepturi vitae minima, voluptatum iusto, debitis laudantium harum architecto sed natus voluptatem, magni ratione tempora aliquam officiis! Cumque corrupti officia veritatis suscipit consectetur impedit delectus animi dignissimos vel adipisci.</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Card