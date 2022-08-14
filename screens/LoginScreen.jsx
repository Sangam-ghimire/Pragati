import { Image, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from "@rneui/themed";


const COLORS = { primary: '#282534', white: '#fff' };
const { height, width } = Dimensions.get('window')

const Logo = require('../assets/icon.png')

function LoginScreen({ navigation }) {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <View style={{}}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 100, marginTop: 20 }}>
                        <Image
                            source={Logo}
                            style={{ height: '100%', width, resizeMode: 'contain' }}
                        />
                    </View>
                </View>
            </View>
            <View>
                <View style={{ margin: 20, height: 0.91 * height, justifyContent: 'center' }}>
                    <Input ref={emailRef} style={{ color: 'white' }} placeholder="Email" onChangeText={(value) => {
                        setEmail(value)
                    }} />
                    <View style={{ height: 20 }} />
                    <Input secureTextEntry={true} style={{ color: 'white' }} placeholder='Password' ref={passwordRef} onChangeText={(value) => {
                        setPassword(value)
                    }} />
                    <View style={{ height: 60 }} />
                    <View style={{}}>
                        <View style={{ height: 40 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Main' }],
                                });
                                // navigation.navigate("Home")
                            }} style={[styles.btn, {
                                backgroundColor: '#0c8ce9'
                            }]}><Text>Login</Text></TouchableOpacity>
                        </View>
                        <View style={{ height: 30 }} />
                        <View style={{ height: 40 }}>
                            <TouchableOpacity onPress={() => { console.log("clicked") }} style={[styles.btn, {
                                backgroundColor: 'silver'
                            }]}><Text>Forget Your Password</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 12,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default LoginScreen

