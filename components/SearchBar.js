import React, {Component} from 'react';
import {
    Header,
    Item,
    Input,
} from 'native-base';
import _ from 'lodash';
import {BASE_URL} from '../constants/apiKey';

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

    requestAPI = _.debounce(() => {
        const {setListData, data,setText} = this.props;
        console.log('rq');
        setListData([]);
        // this.setState({loading: true});
        console.log('----START-QUERY----');
        console.log(this.state.query);
        console.log('----END-QUERY----');

        setText(this.state.query)
        // console.log('-----END-CHILD-----');

        console.log(data);
        const apiURL = BASE_URL + '/search?q=' + this.state.query + '/'; //a them cai api vao giup em
        fetch(apiURL)
            .then(res => res.json())
            .then(resJson => {
                setListData(resJson);
                console.log('Get Response');
                console.log(resJson)

            });
    }, 400);
    handleSearch = text => {
        // const formattedQuery = text.toLowerCase();
        // const data = _.filter(this.state.fullData, link => {
        //     //a sua cai nay nhe
        //     if (link.title.includes(formattedQuery)) {
        //         return true;
        //     }
        //     return false;
        // });
        this.setState({query: text});
        this.requestAPI();
        console.log(this.state.query);
    };

    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Input
                        placeholder="Search"
                        onChangeText={this.handleSearch}
                        onPress={this.handlePress}
                    />
                </Item>
            </Header>
        );

    }
}
