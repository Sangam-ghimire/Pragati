import { Dimensions, Image, View, StyleSheet, Text } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')
const COLORS = { primary: '#282534', white: '#fff' };
export default function Slide({ item }) {
    return (
        <View style={{ alignItems: 'center' }}>
            <Image
                source={item?.image}
                style={{ height: '75%', width, resizeMode: 'contain' }}
            />
            <View>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={styles.subtitle}>{item?.subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
})

