import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {WebView} from 'react-native-webview';

const ImageSearch = ({route}) => {
  // const [text, setText] = useState('');

  // useEffect(() => {
  //   if (text) {
  //     // call api to search image
  //   }
  // }, [text]);

  // return (
  //   <View style={styles.container}>
  //     <View style={styles.image_slide}>
  //       <Image style={styles.image} source={require('../asset/planet.jpg')} />
  //     </View>
  //   </View>
  // );

  return (
    <WebView
      source={{
        uri: `https://www.google.com/`}}
      // source={{html: '<h1>love<h1>'}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_slide: {
    flex: 4,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  oneFlex: {
    flex: 1,
  },
  image: {
    margin: 10,
    height: 450,
    width: 350,
  },
});

export default ImageSearch;
