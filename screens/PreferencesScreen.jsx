import { Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { categories } from '../assets/data';
import { Icon } from '@rneui/themed';

const { width } = Dimensions.get('window')

function PreferencesComponent({ image, title }) {
    const [isSelected, setSelected] = useState(false)
    return (
        <View style={{ height: 100, width: 110, margin: 2, marginVertical: 5 }}>
            <TouchableOpacity onPress={() => {
                setSelected(!isSelected)
            }}>
                <ImageBackground style={{
                    height: 100,
                    width: 110,
                    borderColor: 'skyblue',
                    borderWidth: 1,
                    borderRadius: 8,
                    overflow: 'hidden',
                    resizeMode: 'contain',
                    justifyContent: 'center',
                }} source={{ uri: image }} >
                    <Text style={{
                        color: "black",
                        fontSize: 10,
                        fontWeight: "bold",
                        textAlign: "center",
                        backgroundColor: "transparent",
                        flexWrap: 'wrap'
                    }}>{title}</Text>
                    {isSelected && <View style={{ top: 0, right: 0, justifyContent: 'center', alignItems: 'center', position: 'absolute', width: 20, height: 20, borderRadius: 50, backgroundColor: "white" }}>
                        <Icon name="check" size={10} />
                    </View>}
                </ImageBackground>
            </TouchableOpacity>
        </View>
    )
}

function PreferencesScreen({ navigate }) {
    return (
        <SafeAreaView>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: 100, width, marginTop: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 30, color: 'black', textAlign: 'center' }}>Which topics are you interested in ?</Text>
                </View>

                <View style={{
                    height: 350,
                    margin: 20,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    {categories.map(categorie => {
                        return (
                            <PreferencesComponent image={categorie.image} title={categorie.title} id={categorie.id} />
                        )
                    })}
                </View>

                <View style={{ height: 50, width, }}>
                    <TouchableOpacity style={{ height: 50, marginHorizontal: 40, backgroundColor: 'skyblue', borderRadius: 16, }}>
                        <Text style={{ fontSize: 30, color: 'black', textAlign: 'center' }}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView >
    )
}

export default PreferencesScreen;