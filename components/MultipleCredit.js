import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Voice from '@react-native-community/voice';
import IconFontAws from 'react-native-vector-icons/FontAwesome';


export default class MultipleCredit extends Component {
    render() {
        return (
            <View style={styles2.container_}>
                <Text style={styles.firstText}>Credits</Text>
                <Text style={styles.secondText}>This is an application that helps you search for news via voice</Text>
                <Text style={styles.thirdText}>Guide</Text>
                <Text style={styles.fourthText}>When in use, the user touches the recording key to the device recognizes
                    the voice. Then the application will find news results based on your words </Text>
                <Text style={styles.fifthText}><Icon name="search" color="#008B8B" size={20}/> Search Bar: Common
                    toolbar used to search for the latest news</Text>
                <Text style={styles.fifthText}><Icon name="microphone" color="#008B8B" size={20}/> Microphone: Record
                    user's voice to communicate with the application</Text>
                <Text style={styles.fifthText}><Icon name="search-plus" color="#008B8B" size={20}/> Change Language:
                    Change the language to suit users</Text>
                <Text style={styles.fifthText}><Icon name="refresh" color="#008B8B" size={20}/> Reset activity: Returns
                    to the original default of the application</Text>
                <Text style={styles.sixthText}>Developed, and published, by </Text>
                <Text style={styles.seventhText}>Do Tuan Anh</Text>
                <Text style={styles.seventhText}>Tran Viet Tien</Text>
                <Text style={styles.seventhText}>Nguyen Tuan Linh </Text>
                <Text style={styles.seventhText}>Tran Anh Bao</Text>
                <Text style={styles.eighthText}>Version beta v1.0.0 </Text>
                {/*<View style={styles2.oneFlex_}>*/}
                {/*    <View style={styles2.controlPart}>*/}
                {/*        <TouchableOpacity*/}
                {/*            style={{alignItems: 'center'}}*/}
                {/*            onPress={() => {*/}
                {/*                this.props.route.params.setLanguage(this.props.route.params.language === 'vi-VN' ? 'EN' : 'VN');*/}
                {/*            }}>*/}
                {/*            <Text>{this.props.route.params.language*/}
                {/*            }</Text>*/}
                {/*            <Icon name="book" size={32} color="blue" style={{color: 'blue'}}/>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}

                {/*    <View style={styles2.controlPart}>*/}
                {/*        <TouchableOpacity onPress={() => {*/}
                {/*        }}>*/}
                {/*            <IconFontAws name='microphone' size={25} color="green"/>*/}
                {/*        </TouchableOpacity>*/}
                {/*    </View>*/}
                {/*    /!*<View style={styles2.controlPart}>*!/*/}
                {/*    /!*    <TouchableOpacity*!/*/}
                {/*    /!*        onPress={() => {*!/*/}
                {/*    /!*            navigation.navigate('NewsSearch', {url: item.link});*!/*/}

                {/*    /!*        }}>*!/*/}
                {/*    /!*        <Icon name="help" size={50} color="#1E1E1E"/>*!/*/}
                {/*    /!*    </TouchableOpacity>*!/*/}
                {/*    /!*</View>*!/*/}
                {/*</View>*/}

            </View>

        );
    }
}
const styles2 = StyleSheet.create({
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
        flexBasis: '25%',
        alignItems: 'center',
        // alignContent: 'center',
    },
    divider: {
        width: 50,
        height: 1,
        backgroundColor: 'blue',
    },
});

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#e8e3e3',
        borderWidth: 4,
        borderColor: '#1F618D',
    },
    firstText: {
        margin: 5,
        marginLeft: 140,
        marginRight: 140,
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    },
    secondText: {
        margin: 5,
        marginLeft: 50,
        marginRight: 25,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,

    },
    thirdText: {
        margin: 5,
        marginLeft: 150,
        marginRight: 150,
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
    },
    fourthText: {
        margin: 5,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    fifthText: {
        margin: 5,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    sixthText: {
        margin: 5,
        marginLeft: 100,
        marginRight: 100,
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    seventhText: {
        margin: 5,
        marginLeft: 150,
        marginRight: 150,
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },
    eighthText: {
        margin: 5,
        marginLeft: 140,
        marginRight: 140,
        color: 'brown',
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
    },

});
