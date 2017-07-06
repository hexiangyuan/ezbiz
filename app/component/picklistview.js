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
            SeparatorComponent={SeparatorComponent}
            renderItem={({item}) => (<ListItem
                itemData={item}
            />)}
        />);
    }
}

class SeparatorComponent extends Component {
    render() {
        return ((<View style={{backgroundColor: 'black', height: 1}}/>));
    }
}
class ListItem extends Component {

    render() {
        return (
            <View style={{flexDirection: 'column'}}>
                <View style={{flexDirection: 'row', marginTop: 4}}>
                    <Text style={{color: 'black'}}>{this.props.itemData.shelfNum}</Text>
                    <Text>{this.props.itemData.nickName}</Text>
                    <Text>{this.props.itemData.parcelNum}</Text>
                    <Text>{this.props.itemData.weight}</Text>
                </View>
                {this.remarkText(this.props.itemData.remark)}
                <View style={{backgroundColor: 'gray', height: 1, marginTop: 4}}/>
            </View>);
    }

    remarkText(remark) {
        if (remark === null || remark.length === 0) return null;
        return (<Text style={{color: 'red'}}>{remark}</Text>)
    }
}