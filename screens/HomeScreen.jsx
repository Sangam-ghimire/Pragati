import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Avatar, Image } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Octicons';
import Feed from '../components/Feed';


export default function HomeScreen({ navigate }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* My Feed */}
            <View style={{ height: 200 }}>
                <Text style={{ marginLeft: 10, fontSize: 40, }}>Feeds</Text>
                <Feed />
            </View>

            <View style={{ paddingHorizontal: 10, paddingVertical: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 40 }}>Hello, <Text style={{ fontWeight: 'bold' }}>Rohit</Text></Text>
            </View>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20, color: 'gray' }}>Classes</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>5 classes today</Text>
            </View>

            <View style={{ justifyContent: "space-between", backgroundColor: '#D3D3D3', borderRadius: 20, margin: 10, padding: 20, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'darkgray', borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                            <Icon name='history' size={30} />
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 25 }}>History</Text>
                            <Text style={{ fontSize: 15 }}>8:00-8.45</Text>
                        </View>
                    </View>
                    <View style={{ height: 50 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 10,
                            flex: 1,
                            height: 50,
                            borderRadius: 12,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon name='history' size={15} />
                            <View style={{ width: 2, backgroundColor: 'white', height: '100%' }} />
                            <View style={{ width: 10 }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 150,
                    height: 150,
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




            <View style={{ justifyContent: "space-between", backgroundColor: '#D3D3D3', borderRadius: 20, margin: 10, padding: 20, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'darkgray', borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                            <Icon name='history' size={30} />
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 25 }}>History</Text>
                            <Text style={{ fontSize: 15 }}>8:00-8.45</Text>
                        </View>
                    </View>
                    <View style={{ height: 50 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 10,
                            flex: 1,
                            height: 50,
                            borderRadius: 12,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon name='history' size={15} />
                            <View style={{ width: 2, backgroundColor: 'white', height: '100%' }} />
                            <View style={{ width: 10 }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 150,
                    height: 150,
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




            <View style={{ justifyContent: "space-between", backgroundColor: '#D3D3D3', borderRadius: 20, margin: 10, padding: 20, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ backgroundColor: 'darkgray', borderRadius: 50, justifyContent: 'center', alignItems: "center" }}>
                            <Icon name='history' size={30} />
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 25 }}>History</Text>
                            <Text style={{ fontSize: 15 }}>8:00-8.45</Text>
                        </View>
                    </View>
                    <View style={{ height: 50 }}>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            padding: 10,
                            flex: 1,
                            height: 50,
                            borderRadius: 12,
                            backgroundColor: 'black',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Icon name='history' size={15} />
                            <View style={{ width: 2, backgroundColor: 'white', height: '100%' }} />
                            <View style={{ width: 10 }} />
                            <Text style={{ color: 'white', fontSize: 16 }}>Join Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 150,
                    height: 150,
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})