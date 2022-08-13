import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const { height } = Dimensions.get('window')
const COLORS = { primary: '#282534', white: '#fff' };

function Footer({ slides, currentSlideIndex, skip, goToNextSlide, navigation }) {
    return (
        <View style={{
            height: height * 0.25,
            justifyContent: 'center',
            paddingHorizontal: 20
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20
            }}>

                {slides.map((_, index) => {
                    return (<View key={index} style={[
                        styles.indicator, currentSlideIndex === index ? { backgroundColor: 'black' } : null
                    ]}>

                    </View>)
                })}
            </View>
            <View style={{ height: 50 }} />

            <View style={{
                marginBottom: 20
            }}>
                {currentSlideIndex === slides.length - 1 ? (
                    <View style={{ height: 50, flexDirection: 'row' }}>
                        <TouchableOpacity style={[styles.btn, { backgroundColor: 'rgb(35,153,35)' }]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                Get Started
                            </Text>
                        </TouchableOpacity>
                        <View style={{ width: 30 }} />
                        <TouchableOpacity style={[styles.btn]} onPress={() => { navigation.navigate('Login') }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                LOGIN
                            </Text>
                        </TouchableOpacity>
                    </View>)
                    :
                    (<View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={skip} style={[styles.btn,
                        {
                            borderColor: COLORS.white,
                            borderWidth: 1,
                            backgroundColor: '#0c8ce9',

                        }]}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                SKIP
                            </Text>
                        </TouchableOpacity>
                        <View style={{ width: 30 }} />
                        <TouchableOpacity style={[styles.btn]} onPress={goToNextSlide}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                NEXT
                            </Text>
                        </TouchableOpacity>
                    </View>)
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    indicator: {
        height: 2.5,
        width: 5,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default Footer