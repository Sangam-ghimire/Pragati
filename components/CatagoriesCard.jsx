import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'

function CatagoriesCard({ image, title }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ width: 150, margin: 10, shadowOffset: { width: 3, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 10, shadowColor: 'grey' }} onPress={() => {
            // navigation.navigate('CatageorySpecific',{ category:title })
        }}>
            <Image source={{ uri: image }} style={{ height: 100, width: 150 }} />
            <View style={{ height: 40, width: 150 }}>
                <Text style={{ flex: 1, fontWeight: 'bold', justifyContent: 'center' }}>{title}</Text>
            </View>


        </TouchableOpacity>
    )
}

export default CatagoriesCard; 