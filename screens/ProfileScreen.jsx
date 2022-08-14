import { Dimensions, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Icon, Image, Input } from '@rneui/themed'

const { width, height } = Dimensions.get("window")

function ProfileScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{}}>
                    <View style={{ backgroundColor: 'skyblue', width: width, height: 200 }}></View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 300,
                        width: '100%',
                        marginTop: -120,
                    }}>
                        <Avatar
                            size={200}
                            rounded
                            source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg' }}
                        />

                        <View  >
                            <Text style={{
                                fontSize: 30
                            }}> Ronit Karki</Text>
                            <View style={{ height: 10 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        navigation.navigate("Preferences")
                                    }}
                                    style={{
                                        flex: 1,
                                        height: 50,
                                        borderRadius: 12,
                                        backgroundColor: '#fff',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Text>Preferences</Text>
                                </TouchableOpacity>
                                <View style={{ width: 10 }} />
                                <TouchableOpacity style={{
                                    flex: 1,
                                    height: 50,
                                    borderRadius: 12,
                                    backgroundColor: '#eef',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ color: 'black' }}>Settings</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={{ margin: 10, borderColor: 'black', borderWidth: 2 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, }}>Achievements</Text>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProfileScreen