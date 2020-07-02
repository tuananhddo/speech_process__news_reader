import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Voice from '@react-native-community/voice';
import Sound from 'react-native-sound';
import {
    Button,
    ListItem,
    Text,
    Left,
    Body,
    Right,
    Thumbnail,
    Icon,
} from 'native-base';
import SearchBar from './SearchBar';
import {BASE_URL} from '../constants/apiKey';
import ShareButton from '../screens/ShareButton';
import SpinnerCustom from './PageLoader';

const Microphone = ({navigation}) => {
    const [icon, setIcon] = useState('microphone');
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('vi-VN');
    const [data, setData] = useState([]);

    function sendKeyWordToAPI(keyword) {
        return fetch(BASE_URL + '/search?q=' + keyword + '/')
            .then(response => response.json())
            .then(json => {
                setData(json);
                console.log('Get Response');
            })
            .catch(error => {
                console.error(error);
            });
    }

    useEffect(() => {
        // Voice.isAvailable().then(r => console.log('avalable: ' + r));
        const onSpeechStart = e => {
            setIcon('pause');
        };
        const onSpeechEnd = e => {
            console.log('end: ' + e);
        };
        const onSpeechError = e => {
            Alert.alert('Error while listening!');
            setIcon('microphone');
        };
        const onSpeechResults = e => {
            console.log('result: ' + e.value[0]);
            setIcon('microphone');
            sendKeyWordToAPI(e.value[0]);

            setText(e.value[0]);
            // Voice.destroy().then(Voice.removeAllListeners);
        };

        Voice.onSpeechStart = onSpeechStart;
        Voice.onSpeechEnd = onSpeechEnd;
        Voice.onSpeechError = onSpeechError;
        Voice.onSpeechResults = onSpeechResults;
    }, []);

    const touchMicro = async () => {
        if (icon === 'microphone') {
            try {
                await Voice.start(language);
                console.log('start rec');
            } catch (e) {
                console.log('start error: ' + e);
            }
        } else if (icon === 'pause') {
            try {
                await Voice.stop();
                console.log('stop rec');
                setIcon('hourglass-o');
            } catch (e) {
                console.log('stop error: ' + e);
            }
        } else {
            console.log('...processing');
        }
    };

    function playSound(postLink) {
        console.log('postLink:' + postLink);

        function setGlobalSound(link) {
            var hello = new Sound(link, null, error => {
                if (error) {
                    console.log(error);
                }
                if (global.sound) {
                    global.sound.stop();
                }
                global.sound = hello;
                hello.play(success => {
                    console.log('Sound Playing');
                });
            });
        }

        const formData = new FormData();
        formData.append('link', postLink);

        fetch(BASE_URL + '/post', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                Accept: 'application/json',
            },
            body: formData, // body data type must match "Content-Type" header
        })
            .then(response => response.json())
            .then(json => {
                setGlobalSound(json.link);
                console.log('Get Response' + json.link);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const _renderItem = ({item, index}) => {
        return (
            <ListItem avatar>
                <Left>
                    <Thumbnail
                        source={{
                            uri:
                                'https://3d-model-cdn.s3-ap-southeast-1.amazonaws.com/planet.png',
                        }}
                    />
                </Left>
                <Body>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>
                        {item.source}
                    </Text>
                </Body>
                <Right>
                    <Button
                        rounded
                        onPress={() => {
                            playSound(item.link);
                            navigation.navigate('NewsSearch', {url: item.link});
                        }}>
                        <Icon name='grid'/>
                    </Button>
                </Right>
                <Right>
                    <ShareButton data={item.link}></ShareButton>
                </Right>
            </ListItem>
        );
    };
    console.log('-----PARENT-----');
    console.log(data);
    return (
        <View style={styles.container_}>
            <View style={styles.searchBar}>
                <SearchBar setListData={setData} data={data} setText={setText}/>
            </View>
            <View style={styles.listNews}>
                {text ? (
                    data.length > 0 ?
                        <FlatList
                            data={data}
                            key={'myFlatList'}
                            keyExtractor={({id}, index) => 'news' + index}
                            renderItem={_renderItem}
                        />
                        :
                        <SpinnerCustom></SpinnerCustom>
                ) : (
                    <View>
                        <Text style={styles.recWarn}>Ghi âm</Text>
                    </View>
                )}
            </View>

            <View style={styles.twoFlex}>
                <View style={styles.keyword}>
                    <Text style={styles.keyword_text}>{text || '- - -'}</Text>
                </View>
            </View>

            <View style={styles.oneFlex_}>
                <View style={styles.controlPart}>
                    <TouchableOpacity
                        style={{alignItems: 'center'}}
                        onPress={() => {
                            setLanguage(language === 'vi-VN' ? 'en-US' : 'vi-VN');
                        }}>
                        <Text>{language}</Text>
                        <Icon name="ios-search" size={32} color="blue"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.controlPart}>
                    <TouchableOpacity onPress={touchMicro}>
                        <Icon name={icon} size={200} color="green"/>
                    </TouchableOpacity>
                </View>

                <View style={styles.controlPart}>
                    <TouchableOpacity
                        onPress={() => {
                            setText('');
                            Voice.destroy().then(Voice.removeAllListeners);
                            setIcon('microphone');
                            if (global.sound) {
                                global.sound.stop();
                            }
                        }}>
                        <Icon name="refresh" size={50} color="#1E1E1E"/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container_: {
        flex: 1,
    },
    threeFlex: {
        flex: 3,
        // alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: 'blue',
        // backgroundColor: 'red',
    },
    twoFlex: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listNews: {
        flex: 8,
    },
    searchBar: {
        flex: 1,
        // alignItems: 'center',
        // borderBottomWidth: 1,
        // borderBottomColor: 'blue',
        // backgroundColor: 'red',
    },
    div: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
    },
    oneFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    oneFlex_: {
        borderTopWidth: 1,
        borderTopColor: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    controlPart: {
        flexBasis: '33%',
        alignItems: 'center',
        // alignContent: 'center',
    },
    keyword: {
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'center',
    },
    keyword_text: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        borderBottomWidth: 3,
        borderBottomColor: '#515A6B',
        // paddingBottom: 20,
        color: '#515A6B',
    },
    divider: {
        width: 50,
        height: 1,
        backgroundColor: 'blue',
    },
    recWarn: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 100,
        color: '#E68585',
        justifyContent: 'center',
        textAlign: 'center',
    },
    isLoaded: {
        display: 'none',
    },
});

export default Microphone;
