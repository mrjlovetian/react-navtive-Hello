import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Platform,
} from 'react-native';

import network from './../Network/NetWork';
import config from './../Comman/Config';

let allDuanzi=[];
let pageIndex=1;

export default class mainView extends Component {

    constructor(props){
        super(props);
        this.state={
            dataSource:new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData(){
        let url = config.duanziApi.baseApi;
        let parmar = {cat:'dz', type:'random', p:pageIndex, ap:'joke', ver:1.7};
        network.get(url, parmar).then((response)=>{
            if (response.length>0){
                allDuanzi = allDuanzi.concat(response);
                console.log('---------------', allDuanzi);
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(allDuanzi)
                })
            }

        })
    }

    render() {
        return (
            <ListView
        style={styles.listViewStyle}
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow}
        onEndReachedThreshold={20}
        onEndReached={this._loadMoreData}
        />
    )
    }

    _loadMoreData=()=> {
        pageIndex += 1;
        this.getData();
    }

    renderRow(rowData){
        return(
            <View style={styles.itemStyle}>
                <View style={styles.topStyle}>
                    <Image source={{uri:rowData.avatar}} style={styles.imageStyle} />
                    <View style={styles.topRightStyle}><Text>{rowData.screen_name}</Text><Text>{rowData.created_at}</Text></View>
                </View>
                <Text style={styles.contentStyle}>{rowData.text}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        marginTop:Platform.OS === 'ios'?20:0,
    },
    itemStyle:{
        padding:10,
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5
    },
    imageStyle:{
        width:30,
        height:30,
        borderRadius:15,
    },
    topStyle:{
        flexDirection:'row',
    },
    topRightStyle:{
        marginLeft:10
    },
    contentStyle:{
        marginTop:5,
        fontSize:15,
    }

})