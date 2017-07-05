/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
    AppRegistry,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Login from "./app/login/login";
import PickSceen from "./app/login/picksrceen";

const ezbizR = StackNavigator({
    Login: {screen: Login},
    Pick: {screen: PickSceen},
});

AppRegistry.registerComponent('ezbizR', () => ezbizR);
