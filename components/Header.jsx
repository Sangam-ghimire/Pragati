import { Dimensions, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Image, Input } from '@rneui/themed'
import Icon from 'react-native-vector-icons/Octicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window')

function Header() {
    const navigation = useNavigation()
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
                height: 40,
                borderColor: 'black',
                borderWidth: 2,
                borderRadius: 8,
                width: 200,
            }}>
                <TextInput
                    style={{ fontSize: 15, paddingHorizontal: 20, paddingVertical: 10, }}
                    ref={input}
                    placeholder="Search"
                >

                </TextInput>
            </View>
            <TouchableOpacity onPress={() => {
                console.log("rohit")
                navigation.navigate('Profile')
            }} style={{ height: 50, width: 54 }}>

                <Avatar
                    size={50}
                    rounded
                    source={{ uri: 'https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg' }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header