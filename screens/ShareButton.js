import React, {Component} from 'react';
import { Share} from 'react-native';
import { Container, Header, Content, Button, Icon, Text } from 'native-base';

export default function ShareButton (props){
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    props.data,
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    return (
        <Button title="Chia sẻ Link" rounded onPress={onShare}>
                        <Icon name='share' />
        </Button>
    );
}
