import { Dimensions, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Avatar, Image, Input } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window')

function Header() {
    const input = React.createRef();
    return (
        <View
            style={{
                width: '100%',
                flex: 1,
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: 'center',
                paddingHorizontal: 10,
                flexGrow: 1,
            }}
        >
            <View style={{
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 8,
                width: 200,
            }}>
                <TextInput
                    style={{ fontSize: 20, paddingHorizontal: 20, paddingVertical: 10, }}
                    ref={input}
                    placeholder="Search"
                >

                </TextInput>
            </View>
            <Avatar
                size={54}
                rounded
                source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg' }}
            />
        </View>
    )
}

export default Header