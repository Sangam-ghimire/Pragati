import { Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

function FeedVideo({ image, title, video, }) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("Video", {
                link: video, title
            })
        }}>
            <View style={{ width: 150, margin: 10, shadowOffset: { width: 3, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 10, shadowColor: 'gray' }}>
                <Image source={{ uri: image }} style={{ height: 100, width: 150, borderRadius: 8 }} />
                <View style={{ height: 60, width: 150, justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Text style={{ fontSize: 20, color: 'black' }}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FeedVideo