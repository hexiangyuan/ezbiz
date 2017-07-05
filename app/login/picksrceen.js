/**
 * Created by justloveu on 2017/7/5.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    Alert,
    View, TextInput, ScrollView, Button, ActivityIndicator
} from 'react-native';
import {fetchRequest} from "../api/apiHelper";
import {ViewPager} from "rn-viewpager";
import PickListView from "../component/picklistview";

export default class PickScreen extends Component {

    static navigationOptions = {
        title: 'Pick',
    }

    constructor(props) {
        super(props);
        this.state = {
            data: [{username: 'zhangsan'},
                {username: 'lisi'},
                {username: 'waner'}],
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>测试</Text>
                <PickListView
                    data={this.state.data}
                />
            </View>)
    }

    componentDidMount() {
        fetchRequest()
    }
}
const styles = StyleSheet.create({
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    },
})