import { FlatList, View } from 'react-native'
import React from 'react'
import FeedVideo from './FeedVideo';
import { childData } from '../assets/data';


function Feed() {
    return (
        <View style={{ marginTop: 10 }}>
            <FlatList
                data={childData}
                renderItem={({ item }) => {
                    return (<FeedVideo video={item.video} image={item.image} title={item.title} />)
                }}
                keyExtractor={item => item.id}
                horizontal={true}
                snapToAlignment="start"
                decelerationRate={"fast"}
                snapToInterval={150}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
}

export default Feed