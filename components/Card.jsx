import React from 'react'
import { Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Video from './Video'
function Card({ link, title }) {
    return (
        <View style={{ backgroundColor: '#f2f0eb', marginVertical: 10 }}>
            <Video link={link} />
            <View style={{ backgroundColor: '#f2f0eb' }}>
                <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 5, marginTop: 10, paddingTop: 10, height: 50 }}>{title}</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    marginVertical: 5
                }}
            />
            <View style={{ flexDirection: 'row', backgroundColor: '#f2f0eb', paddingBottom: 10, paddingTop: 10 }}>
                <Image source={{ uri: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' }} style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 5 }}></Image>
                <Text style={{ fontSize: 20, fontWeight: '500', marginLeft: 15, marginTop: 5 }}>Santosh Singh</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
        </View>
    )
}

export default Card