import {StackNavigator} from 'react-navigation';
import MainView from './Modules/MainView';
import React, { Component } from 'react';

const MrjNavigator = StackNavigator({
    MainView:{screen:MainView},
    navigationOptions: {
        headerTitle:'详情',
        headerBackTitle:null,
    }
})

export default class MrjNavigator extends Component{

}