import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import _ from 'lodash';
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
        const apiURL = '';
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
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={this.handleSearch} />
                    </Item>
                </Header>
            </Container>
        );
    }
}
