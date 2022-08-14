import React from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

function Video({ link }) {
  const renderLoadingView = () => {
    return <Text>Loading</Text>
  }

  return (
    <View style={{ height: 400 }}>
      <WebView
        renderLoading={renderLoadingView}
        startInLoadingState={true}
        source={{ uri: `${link}` }}
        style={{ width: '100%', height: '100%' }} />
    </View>
  )
}

export default Video
