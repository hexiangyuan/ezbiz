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
            data: [],
            text: '测试'
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text>{this.state.text}</Text>
                <PickListView
                    data={this.state.data}
                />
            </View>)
    }

    componentDidMount() {
        let req = {
            "filter": {
                "deliveryDate": "2017-07-06",
                "deliveryMan": "",
                "deliveryTypeId": 4,
                "isPicked": false,
                "isSigned": false,
                "periodId": 0,
                "periodType": "",
                "ptlGroupId": 0,
                "regionId": 0,
                "showPaymentInfo": false,
                "showShipmentDetail": false,
                "stationId": 0,
                "stationTypeId": 0
            }
        };
        fetchRequest('UserGetSubPkgs', req)
            .then((response) => {
                this.setState({
                    data: response.subPkgs.slice(0,100), text: 'response'
                })
            })
            .catch((error) => {
                this.setState({
                    data: [],
                    text: 'error'
                })
            }).done();
    }
}