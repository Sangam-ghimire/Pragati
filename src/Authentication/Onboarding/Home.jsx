import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native'
import React, { useRef } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Slide from './Slide';
import { useState } from 'react';
import Footer from './Footer';

const { height, width } = Dimensions.get("window")
const COLORS = { primary: '#282534', white: '#fff' };
const slides = [
    {
        id: '1',
        image: require('../../../assets/image1.png'),
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        image: require('../../../assets/image2.png'),
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        image: require('../../../assets/image3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];

export default function Home({ navigation }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = useRef();
    const updateCurrentSlideIndex = e => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };


    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <FlatList
                ref={ref}
                onMomentumScrollEnd={updateCurrentSlideIndex}
                contentContainerStyle={{ height: height * 0.75 }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={slides}
                pagingEnabled
                renderItem={({ item }) => <Slide item={item} />}
            />
            <Footer slides={slides} goToNextSlide={goToNextSlide} skip={skip} currentSlideIndex={currentSlideIndex} navigation={navigation} />
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

});