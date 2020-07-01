import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {
    Container,
    Header,
    Item,
    Input,
    List,
    FlatList,
    Text,
    ListItem,
} from 'native-base';
import _ from 'lodash';
import PageLoader from './PageLoader';
export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            fullData: [],
            loading: false,
            error: null,
            query: '',
        };
    }
    componentDidMount() {
        this.requestAPI();
    }
    requestAPI = _.debounce(() => {
        this.setState({ loading: true });
        const apiURL = ''; //a them cai api vao giup em
        fetch(apiURL)
            .then(res => res.json())
            .then(resJson => {
                this.setState({
                    loading: false,
                    data: resJson,
                    fullData: resJson,
                }).catch(error => this.setState({ error, loading: false }));
            });
    }, 250);
    handleSearch = text => {
        const formattedQuery = text.toLowerCase();
        const data = _.filter(this.state.fullData, link => {
            //a sua cai nay nhe
            if (link.title.includes(formattedQuery)) {
                return true;
            }
            return false;
        });
        this.setState({ data, query: text });
    };
    _renderItem = ({ item, index }) => {
        return (
            <ListItem>
                <Text>{item.title}</Text>
            </ListItem>
        );
    };
    handlePress = ({ item, index }) => {
        return (
            <List>
                <FlatList>
                    data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={{ item, index }}
          ListFooterComponent={this.renderFooter}
                </FlatList>
            </List>
        );
    };
    renderFooter = () => {
        if (this.state.loading) {
            return null;
        }
        return (
            <View
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                    paddingVertical: 20,
                    borderBottomWidth: 1,
                    borderColor: 'CED0CE',
                }}>
                <ActivityIndicator animating size="large" />
            </View>
        );
    };
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Input
                            placeholder="Search"
                            onChangeText={this.handleSearch}
                            onPress={this.handlePress}
                        />
                    </Item>
                </Header>
                <PageLoader show={this.state.loading} />
            </Container>
        );
    }
}
