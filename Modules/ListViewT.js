import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
} from 'react-native';

var Data = require('./../Data.json');

export default class ListViewT extends Component {

    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
        this.state={
            dataSource:ds.cloneWithRows(Data)
        }
    }

    render(){
        return(
            <ListView
        dataSource = {this.state.dataSource}
        renderRow = {this.renderRow}
        onEndReached = {this._loadData}
        onEndReachedThreshold = {20}
        />

        )
    }

    _loadData = ()=> {
        console.log('加载了好多数据')
    }

    renderRow(rowData) {
        return (
            <View style={styles.RowStyle}>
                <Image source = {{uri:rowData.image}} style={styles.listImage}/>
                 <View>
                     <Text style={[styles.textStyle, styles.TitleStyle]}>{rowData.title}</Text>
                    <Text style={[styles.textStyle, styles.subTitleStyle]}>{rowData.subtitle}</Text>
                 </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    RowStyle:{
        height: 115,
        flexDirection:'row',
    },

    listImage:{
        width: 100,
        height: 100,
        marginLeft:5,
        marginTop:2.5,
        // backgroundColor:'red',
    },

    textStyle:{
        marginTop:15,
        marginLeft:10,
    },

    TitleStyle:{
        fontSize:14,
        color:'#333333'
    },
    subTitleStyle:{
        fontSize:12,
        color:'#999999',
    }

})



