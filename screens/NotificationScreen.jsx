import { Text, View, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Notification from '../components/Notification'

const { width } = Dimensions.get('window');
function NotificationScreen({ navigate }) {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10, padding: 10, width: width - 20 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "100%" }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Notifications</Text>
                    <Text style={{ fontSize: 15, color: 'lightblue' }}>Mark as all read</Text>
                </View>
                <View style={{ height: 10 }} />
                <View style={{ height: 2, backgroundColor: 'black', width: '100%' }} />

                <Notification user="Code Camp" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="5 mins Ago" data="CodeCamp is happenning near you." />
                <Notification user="It Meet" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="1 day Ago" data="IT Meet is happenning near you. Check This Out" />
                <Notification user="NASO" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="10 day Ago" data="Interested in Olympiad. This my be for you. Do Check this out" />
                <Notification user="Rotaract" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="15 days Ago" data="Rotaract is conducting blood donation program. Do check this Out" />
                <Notification user="Banepa High School" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="15 days Ago" data="Banepa High School is conducting oratory competition. you might be interested." />
                <Notification user="Expo Science Asia" avatar="https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg" time="20 days Ago" data="Asia Expo 2022 is happenning near you. Do check this Out" />

            </View>
        </ScrollView>
    )
}

export default NotificationScreen