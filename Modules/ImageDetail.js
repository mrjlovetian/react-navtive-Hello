import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    ImageBackground,
    Text,
    AlertIOS,
    TouchableOpacity,
    View,
    CameraRoll,
} from 'react-native';

import Dimensions from 'Dimensions'

const {width, height} = Dimensions.get('window');

//获取照片信息
// var fetchParams = {
//     first: 6,
//     groupTypes:'All',
//     assetType:'Photos',
// }
// componentDidMount() {
//     var that = this;
//     var promis = CameraRoll.getPhotos(fetchParams)
//     promis.then((data)=>{var edges = data.edges; var photos = []; for (var i in edges){photos.push(edges[i].node.image.uri)} that.setState({
//         photos:photos,
//     }) }).catch((error)=>{AlertIOS.alert("获取照片失败")})
//
// }

export default class ImageDatail extends Component{

    static navigationOptions = {
        header:null
    }

    constructor(propTypes){
        super(propTypes);
        this.state={
            photos:[]
        }
    }

    _saveImage = ()=> {
        console.log(this.props.navigation.state.params.imageUrl)
        var promise = CameraRoll.saveToCameraRoll(this.props.navigation.state.params.imageUrl);
        promise.then(function (result) {
            alert('保存成功！地址如下：\n' + result);
        }).catch(function (error) {
            alert('保存失败！\n' + error);
        });
    }

    // source = {{uri:this.props.navigation.state.params.imageUrl}}>


    render(){
        return(
            <ImageBackground source = {{uri:this.props.navigation.state.params.imageUrl}} style={styles.mainStyle}>

            <TouchableOpacity onPress={this._saveImage}>
                <View>
                <Text style={{marginTop:100, marginLeft:100, color:'orange', width:100, height:30}}>保存图片</Text>
                </View>
            </TouchableOpacity>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mainStyle:{
        height:height,
        width:width,
        backgroundColor:'red'
    }
})