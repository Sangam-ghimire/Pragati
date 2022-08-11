import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get("window")

const SLIDE_HEIGHT = 0.61 * height

const Slide = (props) => {
    const transform = [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: props.right ? (width / 2 - 50) : (-width / 2 + 50) },
        { rotate: props.right ? "-90deg" : "90deg" }
    ]

    return (
        <View style={styles.container}>
            <View style={[styles.titleContainer, { transform }]}>
                <Text style={styles.title}>{props.label}</Text>
            </View>
        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    container: {
        width,
    },
    titleContainer: {
        height: 100,
        justifyContent: "center",
    },
    title: {
        fontSize: 80,
        color: "white",
        textAlign: "center"
    }
})