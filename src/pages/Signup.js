import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar,TouchableOpacity} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
    goBack(){
        Actions.pop();
    }
    render() {
        return (
            <View style={styles.container}>
                <Logo/>
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.textColor}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.goBack}><Text style={styles.textbutton}> Sign in</Text></TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {       
        backgroundColor: '#1c253c',
        flexGrow:1,
        alignItems:'center',
        justifyContent:'center',
    },
    signupTextCont: {
        flexGrow:1,
        alignItems:'flex-end',    
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row'
    },
    textColor: {
        color:'#ffffff', 
        fontSize:16,
        fontWeight: 'bold'
    },
    textbutton: {
        color:'#F26D21',
        fontSize:16,
        fontWeight:'500'
    }
});