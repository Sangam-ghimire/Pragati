import React, { useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'


const language = ["English", "Nepali", "Newari", "Hindi", "Spanish", "German"]
function Signup() {
    const [text, onChangeText] = useState("");
    const [number, onChangeNumber] = useState(null);
    const [age, onChangeAge] = useState(null);
    const [address, onChangeAddress] = useState("");
    const [school, onChangeSchool] = useState("");
    const [father, onChangeFather] = useState("");
    const [mother, onChangeMother] = useState("");



    return (

        <View>
            <Text style={{fontSize:30, fontWeight:'700',paddingHorizontal:130}}>SignUp</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                placeholder="enter your name"
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="enter your age"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeAge}
                value={age}
                placeholder="enter your number"
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeAddress}
                value={address}
                placeholder="enter your address"
            />



            <TextInput
                style={styles.input}
                onChangeText={onChangeSchool}
                value={school}
                placeholder="enter your schools name"
            />





            <TextInput
                style={styles.input}
                onChangeText={onChangeMother}
                value={mother}
                placeholder="enter your Mothers name"
            />

            <TextInput
                style={styles.input}
                onChangeText={onChangeFather}
                value={father}
                placeholder="enter your fathers name"
            />

            <SelectDropdown
                data={language}
                defaultButtonText="Enter your preferred language"
                onSelect={(selectedItem, index) => {
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem
                }}
                rowTextForSelection={(item, index) => {
                    return item
                }}
            />
            <Button
                title="Learn More"
                color="#5dadfc"
                styles={{marginHorizontal:40}}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        padding: 10,
        borderBottomWidth: 1
    },
});



export default Signup