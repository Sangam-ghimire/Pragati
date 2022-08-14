import { View, StyleSheet, Text, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import { Avatar, Image } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Octicons';
import Feed from '../components/Feed';
import { childData, DATA } from '../assets/data';


export default function HomeScreen({ navigate }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {/* My Feed */}
            <View style={{ height: 200 }}>
                <Text style={{ marginLeft: 10, fontSize: 40, }}>Feeds</Text>
                <Feed />
            </View>
            <View style={{ paddingHorizontal: 10, paddingVertical: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 40 }}>Hello, <Text style={{ fontWeight: 'bold' }}>Ronit</Text></Text>
            </View>
            {childData.map(data => (<View key={data.id} style={{ justifyContent: "space-between", backgroundColor: '#D3D3D3', borderRadius: 20, margin: 10, padding: 20, flexDirection: 'row' }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center' }}>
                        <View style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }} >{data.title}</Text>
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

                            <Text style={{ color: 'white', fontSize: 16 }}>Play Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    width: 150,
                    height: 150,
                }}>
                    <Image
                        source={{ uri: `${data.image}` }}
                        containerStyle={{
                            aspectRatio: 1,
                            width: '100%',
                            flex: 1,
                        }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

            </View>
            ))
            }

        </ScrollView>
    )
}

const styles = StyleSheet.create({

})