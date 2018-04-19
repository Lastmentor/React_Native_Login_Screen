import React, { Component } from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{width:100,height:100}}
                    source={require('../images/mars.png')}/>
                <Text style={styles.logoText}>Welcome to Space Park</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {       
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoText: {
        fontSize:20,
        marginVertical:15,
        color:'#F26D21'
    }
});