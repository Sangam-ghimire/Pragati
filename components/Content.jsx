import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native'

function Content({ image, title, video }) {
    const navigation = useNavigation();
    return (

        <TouchableOpacity style={{ flex: 1, padding: 1 }} onPress={() => {
            // navigation.navigate('CatagorieSection', { title: title, video: video })
        }}>
            <Image source={{ uri: `${image}` }} style={{ height: 150 }} />
        </TouchableOpacity>
    )
}

export default Content