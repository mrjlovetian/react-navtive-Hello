import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class mainView extends Component {

    render() {
        return (
            <View style={styles.main}>
    </View>
    )
    }
}

const styles = StyleSheet.create({
    main: {
        height: 80,
        backgroundColor: 'blue',
    }
})