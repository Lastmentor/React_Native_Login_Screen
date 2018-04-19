import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity, Image} from 'react-native';
import Logo from '../components/Logo';
import Form from '../components/Form';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
    signup(){
        Actions.signup()
    }
    render() {
        return (
            <View style={styles.container}>                
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.textColor}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}><Text style={styles.textbutton}> Signup</Text></TouchableOpacity>
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
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