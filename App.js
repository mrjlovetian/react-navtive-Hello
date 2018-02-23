/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
    Image,
  StyleSheet,
} from 'react-native';

// import MrjNavigator from './Comman/MainNav';
import MainView from './Modules/MainView';
import ListViewT from './Modules/ListViewT';
import CenterView from './Modules/CenterView';
import OtherView from './Modules/OtherView';
import MineView from './Modules/MineView';
import ImageDetail from  './Modules/ImageDetail';
import {StackNavigator, TabNavigator} from "react-navigation";
import ImageDatail from "./Modules/ImageDetail";
var ScrollableTabView = require('react-native-scrollable-tab-view');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


// const MrjNavigator = StackNavigator({
//     MainView:{
//         screen:MainView,
//         navigationOptions:({navigation})=>({tabBarLabel:'首页'}),
//     }
// }
// )
//
// <ScrollableTabView tabBarPosition={"bottom"} style = {mystyle.container} renderTabBar={()=><CustomerBar images={['a', 'b', 'c', 'd', 'e']} titles={['主页','列表', '中心', '其他','我的']}/>} locked={true} scrollWithoutAnimation={true}>
//
//
// <MainView />
// <ListViewT />
// <CenterView />
// <OtherView />
// <MineView />
// </ScrollableTabView>

type Props = {};
export default class App extends Component<Props> {

  render() {

    return (
        <Navigator/>
    );
  }
}




const Tab = TabNavigator(
    {
        Home:{
            screen:MainView,
            navigationOptions:({navigation})=>({tabBarLabel:'首页', tabBarIcon: ({tintColor}) => <Image
            resizeMode='center'
            style={[mystyle.tabBarImage, {tintColor: tintColor}]}
            source={require('./Src/main.png')}/>}),
        },
        ListViewT:{
            screen:ListViewT,
            navigationOptions:({navigation})=>({tabBarLabel:'列表', tabBarIcon: ({tintColor}) => <Image
            resizeMode='center'
            style={[mystyle.tabBarImage, {tintColor: tintColor}]}
            source={require('./Src/image.png')}/>})
        },
        CenterView:{
            screen:CenterView,
            navigationOptions:({navigation})=>({tabBarLabel:'中心', tabBarIcon: ({tintColor}) => <Image
            resizeMode='center'
            style={[mystyle.tabBarImage, {tintColor: tintColor}]}
            source={require('./Src/article.png')}/>})
        },
        MineView:{
            screen:MineView,
            navigationOptions:({navigation})=>({tabBarLabel:'我的', tabBarIcon: ({tintColor}) => <Image
            resizeMode='center'
            style={[mystyle.tabBarImage, {tintColor: tintColor}]}
            source={require('./Src/book.png')}/>})
        },
        OtherView:{
            screen:OtherView,
            navigationOptions:({navigation})=>({tabBarLabel:'其他', tabBarIcon: ({tintColor}) => <Image
            resizeMode='center'
            style={[mystyle.tabBarImage, {tintColor: tintColor}]}
            source={require('./Src/info.png')}/>})}
    },
    {
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        // lazy:true,
        tabBarOptions: {
        activeTintColor: 'orange',
            inactiveTintColor: 'gray',
            showIcon: true,
            indicatorStyle: {
            height: 0,
        },
        style: {backgroundColor: 'white'},
            tabStyle: {height: 56},
            labelStyle: {fontSize: 12, height:14,marginBottom: 8,
                marginTop: 5,},
            pressColor: 'gray',
            pressOpacity: 0.8,
            upperCaseLabel: false,
            iconStyle:{height:24},
    },
    }
)

const Navigator = StackNavigator(
    {
        Tab:{screen:Tab},
        ImageDetail:{screen:ImageDetail},

    }
)

const mystyle = StyleSheet.create({
    container: {
      flex: 1,
    },
    tabBarImage: {
        width: 20,
        height: 20,
        marginTop:10,
        padding:5,
    },
    tabBar: {
        backgroundColor: 'white',
    },
    tabBarLabel: {
        fontSize: 12,
    },
    tabBarItem: {
        height: 56,
    },

})
