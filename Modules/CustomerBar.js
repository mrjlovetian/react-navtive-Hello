import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default class CustomerBar extends Component {

    constructor(props){
        super(props);
    }

    static propTypes:{
        iamges:React.PropTypes.array,
        titles:React.PropTypes.array,
        goToPage:React.PropTypes.func,
        activeTab:React.PropTypes.number;
    }

    render() {
        return (
            <View style={styles.main}>
        {this.props.images.map((image,i)=>this.renderItmer(image, i))}
    </View>
    )
    }

    renderItmer(image, i) {
        const textColor = this.props.activeTab == i?'red':'#666666';
        return(
            <TouchableOpacity key={i} style={styles.itemStyle}
        activeOpacity = {0.5} onPress={()=>this.props.goToPage(i)}>
                <View>
                    <Image
            source={{uri:this.props.images[i]}}
            style={styles.image}></Image>
                 <Text style={[{color:textColor}, styles.textStyle]}>{this.props.titles[i]}</Text>
             </View>
        </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        height: 50,
        flexDirection:'row',
        backgroundColor:'#dddddd'
    },
    image:{
        height:25,
        width:25,
    },
    itemStyle: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    textStyle:{
        fontSize:10,
    }
})