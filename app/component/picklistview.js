/**
 * Created by justloveu on 2017/7/5.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    Alert,
    View, TextInput, ScrollView, Button, ActivityIndicator, FlatList
} from 'react-native';

export default class PickListView extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (<FlatList
            data={this.props.data}
            renderItem={({item}) => <Text>{item.username}</Text>}
        />);
    }
}