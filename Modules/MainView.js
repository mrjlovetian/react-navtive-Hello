import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ListView,
    Platform,
    TouchableOpacity,
    View,
} from 'react-native';

var DOMParser = require('xmldom').DOMParser;
let pageIndex=0;
let allImages=[];

import CenterView from './CenterView';
import config from './../Comman/Config';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');

export default class mainView extends Component {

    static navigationOptions = {
        header:null,
    };

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
        };
    }


    render() {
        return (
                <ListView
                    style={styles.listViewStyle}
                    dataSource = {this.state.dataSource}
                    renderRow={this._renderRow}
                    onEndReached={this._fetchMoreData}
                    onEndReachedThreshold={20}
                />
        )
    }

    _fetchMoreData = ()=>{
        pageIndex += 1;
        this.loadData();
    }

    _goDetail = (rowData)=> {
        console.log('lllllll', rowData)
        this.props.navigation.navigate('ImageDetail', {imageUrl:rowData})

    }

    _renderRow = (rowData) => {
        return (
            <TouchableOpacity
        onPress = {()=>this._goDetail(rowData)}>
        <View>
                <Image style={styles.imageStyle}
                source = {{uri:rowData}}>
                </Image>
            </View>
        </TouchableOpacity>
        )
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = config.wallApi.baseApi+"/beauty.php?pg="+pageIndex;
        fetch(url)
            .then((response)=>response.text())
            .then((responseText)=>{
                console.log('-------------', responseText);
                if (responseText){
                    var parser = new DOMParser()
                    var doc = parser.parseFromString(responseText,"text/xml").documentElement
                    var listNode = doc.getElementsByTagName("img");


                    console.log('dataSource', this.state.dataSource.length);
                    for (var i = 0; i< listNode.length; i++){
                        url = listNode[i].getAttribute("link");
                        doneUrl = "http://cdnwpuc.shoujiduoduo.com/wallpaper/"+url;
                        allImages.push(doneUrl);
                    }
                    this.setState({
                        dataSource:this.state.dataSource.cloneWithRows(allImages)
                    })
                }
            }).catch((error) =>{

                console.log('error', error);
        })
    }
}

const styles = StyleSheet.create({
    listViewStyle:{
        flex:1,
        marginTop:Platform.OS === 'ios'?20:0,
    },
    imageStyle:{
        width:width,
        height:height
    }
})


