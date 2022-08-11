import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button
                style={styled.button}
                title="Go to Planner Screen"
                onPress={() => {
                    navigation.push("Planner")
                }} />
        </View>
    )
}
const styled = StyleSheet.create({
    button: {
        borderRadius: "10%"
    },
});

export default HomeScreen