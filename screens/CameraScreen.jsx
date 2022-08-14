import { Text, View, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Camera } from 'expo-camera';
import { manipulateAsync } from 'expo-image-manipulator'
import * as ImagePicker from 'expo-image-picker';
const Clarifai = require('clarifai');
import { useIsFocused } from '@react-navigation/native';
import { Icon, Overlay, Button } from '@rneui/themed';

const app = new Clarifai.App({
    apiKey: '90ec21a193064e489cf77549eaa8b104'
});
process.nextTick = setImmediate;

function CameraScreen({ naviagtion }) {
    const isFocused = useIsFocused();
    const [cameraPermission, setCameraPermission] = useState(null);
    const [galleryPermission, setGalleryPermission] = useState(null);
    const [predictions, setPredictions] = useState([])
    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)

    const takePicture = async () => {
        if (camera) {
            const data = await camera.takePictureAsync(null);
            console.log(data.uri);
            setImageUri(data.uri);
        }
    };

    const resize = async (photo) => {
        let manipulatedImage = await manipulateAsync(
            photo,
            [{ resize: { height: 300, width: 300 } }],
            { base64: true }
        );
        return manipulatedImage.base64;
    };
    const predict = async (image) => {
        let predictions = await clarifai.models.predict(
            Clarifai.GENERAL_MODEL,
            image
        );
        return predictions;
    };
    // const objectDetection = async () => {
    //     let photo;
    //     try {
    //         photo = await takePicture();
    //     } catch {
    //         console.log("err")
    //     }
    //     try {
    //         let resized = await resize(photo);
    //     } catch {
    //         console.log("err")
    //     }
    //     try {
    //         let predictions = await predict(resized);
    //     } catch {
    //         console.log("err")
    //     }

    //     setPrediction(predictions.outputs[0].data.concepts)
    // };
    const objectDetection = async () => {
        setPredictions([{
            key: "Pen", name: "Pen", value: "Pen Value"
        }])
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setVisible(true)
        }, 3000)
    }

    const permisionFunction = async () => {
        // here is how you can get the camera permission
        try {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();

            setCameraPermission(cameraPermission.status === 'granted');

            const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
            console.log(imagePermission.status);

            setGalleryPermission(imagePermission.status === 'granted');


            if (
                imagePermission.status !== 'granted' &&
                cameraPermission.status !== 'granted'
            ) {
                alert('Permission for media access needed.');
            }
        } catch {
            console.log("error")
        }
    };

    useEffect(() => {
        permisionFunction();
    }, []);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });
    }

    const toggleOverlay = () => {
        setVisible(!visible)
    }


    return (
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 30, fontWeight: 'bold' }}>What is Pen?</Text></View>
                {isFocused &&
                    <Camera
                        ref={ref => {
                            setCamera(ref)
                        }}
                        style={{ flex: 1, height: 700 }}
                        type={type}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    // alignSelf: 'flex-start',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Overlay overlayStyle={{ backgroundColor: '#ededed' }} isVisible={visible} onBackdropPress={toggleOverlay}>
                                    <Text style={styles.textPrimary}>Well Done Rohit!</Text>
                                    <Text style={styles.textSecondary}>
                                        Yes, you did a great job.
                                    </Text>
                                    <Button
                                        buttonStyle={{ backgroundColor: 'black' }}
                                        title="Dismiss"
                                        onPress={toggleOverlay}
                                    />
                                </Overlay>

                            </View>
                            <Button
                                buttonStyle={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    backgroundColor: '#7a8793',
                                    height: 50,
                                    borderRadius: 8,
                                    marginVertical: 10,
                                    marginHorizontal: 32
                                }}
                                loading={loading}
                                onPress={objectDetection}
                            >
                                <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', padding: 15, height: 60 }}>
                                    Submit Answer
                                </Text>
                            </Button>
                        </View>
                    </Camera>
                }
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        // flexDirection: 'row'
    },
    fixedRatio: {
        flex: 1,
        aspectRatio: 1,
    },
    button: {
        flex: 0.1,
        padding: 10,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    btn: {
        margin: 10,
    },
    textPrimary: {
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20,
    },
    textSecondary: {
        marginBottom: 10,
        textAlign: 'center',
        fontSize: 17,
    },
})



export default CameraScreen