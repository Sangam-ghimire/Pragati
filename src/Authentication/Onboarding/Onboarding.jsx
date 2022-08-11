import { View, StyleSheet, Dimensions, Animated } from 'react-native'
import React from 'react'
import { useValue, interpolateColors } from 'react-native-reanimated'
import Slide from './Slide'

const { width, height } = Dimensions.get("window")

export default function Onboarding() {
    const x = useValue(0)
    const onScroll = onScrollEvent({ x })
    const backgroundColor = interpolateColors(x, {
        inputRange: [0, width, width * 2, width * 3],
        outputColorRange: ["#BFEAF5", "#BEECC4", "#FFE4D9", "#FFDDDD"]
    });
    console.log(backgroundColor)
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.slider, { backgroundColor }]}>
                <Animated.ScrollView scrollEventThrottle={1} snapToInterval={width} bounces="false" showsHorizontalScrollIndicator={false} decelerationRate="fast" horizontal>
                    <Slide label="Relaxed" />
                    <Slide label="Playful" right />
                    <Slide label="Excentric" />
                    <Slide label="Funky" right />
                </Animated.ScrollView>
            </Animated.View>
            <View style={styles.footer}>
                <Animated.View style={{ ...StyleSheet.absoluteFillObject, backgroundColor }} />
                <View style={{ flex: 1, borderTopLeftRadius: 75, backgroundColor: "white", }}></View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    slider: {
        height: 0.61 * height,
        borderBottomRightRadius: 50
    },
    footer: {
        flex: 1,
    }
})