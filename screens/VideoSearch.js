import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const VideoSearch = ({route}) => {
  return (
    <WebView
      source={{
        uri: `https://www.youtube.com`,
      }}
    />
  );
};

export default VideoSearch;
