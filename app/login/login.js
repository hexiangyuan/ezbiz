/**
 * Created by justloveu on 2017/7/4.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    Alert,
    View, TextInput, ScrollView, Button, ActivityIndicator
} from 'react-native';
import {fetchRequest, setToken} from "../api/apiHelper";

class InputUserName extends Component {

    constructor(props) {
        super(props);
        this.userName = "";
    }

    handleChange() {
        console.log(this.userName);
        this.props.onChange(this.userName);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => {
                        this.userName = text;
                        this.handleChange();
                    }}
                />
            </View>
        );
    }
}

class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.password = "";
    }

    handleChange() {
        this.props.onChange(this.password);
        console.log(this.password);
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TextInput
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={(text) => {
                        this.password = text;
                        this.handleChange();
                    }}/>
            </View>
        );
    }
}

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            animating: false,
        };
    }

    render() {
        return (
            <ScrollView style={{flexDirection: 'column'}}>
                <View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <ActivityIndicator
                            animating={this.state.animating}
                            color='black'
                            size="large"
                        />
                    </View>
                    <View style={styles.container}>
                        <InputUserName
                            label="用户名"
                            onChange={(text) => {
                                this.setState({username: text})
                            }}/>
                        <InputPassword
                            label="密码"
                            onChange={(text) => {
                                this.setState({password: text})
                            }
                            }
                        />
                        <Button
                            color='black'
                            title="登  录"
                            onPress={this.onLoginPress.bind(this)}
                        />
                        <Text>{this.state.result}</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }

    onLoginPress() {
        console.log("login");
        this.loginEzbiz();
    }

    loginEzbiz() {
        const name: string = this.state.username;
        const password: string = this.state.password;
        if (name === null || name.length === 0) {
            Alert.alert("提示", "帐号不能为空", [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            return
        }
        if (password === null || password.length === 0) {
            Alert.alert("提示", "密码不能为空", [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            return
        }
        const user = {"username": name, "password": password, "catalogCode": "SG"};
        this.setState({animating: true})
        fetchRequest('Login', user)
            .then((response) => {
                if (response.isSuccessful) {
                    this.setState({text: response.token, animating: false});
                    setToken(response.token);
                    this.toPick()
                }
            })
            .catch((error) => {
                this.setState({animating: false})
            })
    }

    toPick() {
        const {navigate} = this.props.navigation
        navigate('Pick')
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'column',
        padding: 16,
    },
    label: {
        fontSize: 18,
        color: 'black'
    },
    input: {
        fontSize: 20,
    },
});