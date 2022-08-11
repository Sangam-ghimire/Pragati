import { View, StyleSheet, Dimensions, Animated, Text, ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
// import { Icon } from '@rneui/themed';
import { Avatar, Card, Image } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Octicons';

const { width, height } = Dimensions.get("window")

export default function Home() {
    return (
        <SafeAreaView >
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: "space-between",
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    flexGrow: 1,
                }}
            >
                <Icon
                    name="three-bars"
                    size={20}
                    color='#000' />
                <Avatar
                    size={54}
                    rounded
                    source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg' }}
                />
                <Icon name="search" size={20} />
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                <Text style={{ fontSize: 40 }}>Hello, <Text style={{ fontWeight: 'bold' }}>Rohit</Text></Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: 'gray' }}>Classes</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>5 classes today</Text>
            </View>


            <View style={{ backgroundColor: '#D3D3D3', borderRadius: 20, width: 300, height: 200, padding: 20, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'col', justifyContent: "space-between" }}>
                    <View style={{ backgroundColor: 'darkgray', borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                        <Icon name='history' size={30} />
                    </View>
                    <View style={{}}>
                        <Text style={{ fontSize: 25 }}>History</Text>
                        <Text style={{ fontSize: 15 }}>8:00-8.45</Text>
                    </View>
                </View>
                <View style={{
                    width: 100,
                    height: 100,
                }}>
                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1658527260837-5d055c32110b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2MDIxOTMzMQ&ixlib=rb-1.2.1&q=80&w=1080' }}
                        containerStyle={{
                            aspectRatio: 1,
                            width: '100%',
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

            </View>
        </SafeAreaView>
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