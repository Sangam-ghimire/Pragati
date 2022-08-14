import { Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar, FAB, lightColors, Tooltip, BottomSheet, ListItem, Icon } from '@rneui/themed'

const { width, height } = Dimensions.get("window")
function AuthorProfileScreen() {
    const [isVisible, setIsVisible] = useState(false)
    const list = [
        { title: 'xyzxyz@gmail.com' },
        { title: '9867562341' },
        { title: '@Santosh_Singh ' },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'skyblue' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];
    return (
        <View style={{
            height
        }}>
            <BottomSheet containerStyle={{
                borderTopStartRadius: 8,
                borderTopEndRadius: 8,
            }} modalProps={{}} isVisible={isVisible}>
                {list.map((l, i) => (
                    <ListItem
                        key={i}
                        containerStyle={l.containerStyle}
                        onPress={l.onPress}
                    >
                        <ListItem.Content>
                            <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                ))}

            </BottomSheet>

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
                <View>
                    <Text style={{
                        fontSize: 30
                    }}>Santosh Singh</Text>
                    <View style={{ height: 10 }} />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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
            <View style={{ height: 300, marginTop: 20, alignItems: 'center' }}>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>My life’s mission is to help novice and professional software engineers increase their skills, make more money, and ultimately change their lives for the better.</Text>

                <View style={{ marginTop: 20, alignItems: 'center' }} >
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Field of Expertise</Text>
                    <View style={{ height: 20 }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 15 }}>
                            History and Arts
                        </Text>
                        <Text style={{ fontSize: 15 }}>
                            Language and Oratory Skills
                        </Text>
                    </View>
                </View>
            </View>


            <FAB
                visible={true}
                onPress={() => setIsVisible(!isVisible)}
                style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 10
                }}
                placement="right"
                title="Connect"
                icon={{ name: 'message', color: 'white' }}
                color="skyblue"
            />

        </View>
    )

}

export default AuthorProfileScreen