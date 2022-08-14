import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Avatar } from '@rneui/themed'

function Notification({ avatar, user, data, time }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 15 }}>
            <Avatar
                size={54}
                rounded
                source={{ uri: `${avatar}` }}
            />
            <View style={{ width: 8 }} />
            <View style={{
                flexGrow: 1,

            }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user}</Text>
                    <Text style={{ color: 'skyblue' }}>{time}</Text>
                </View>
                <View style={{
                    flexWrap: 'wrap', width: 290,
                }}>
                    <Text style={{
                        width: 290,
                    }}>
                        {data}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Notification