import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default class Form extends Component {
    render() {
        return (
            <View style={styles.container}>                                             
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder="Email"
                 placeholderTextColor="#ffffff"
                 selectionColor="#fff"
                 keyboardType="email-address"
                 onSubmitEditing={() => this.password.focus()}/>                 
                <TextInput style={styles.inputBox}
                 underlineColorAndroid='rgba(0,0,0,0)' 
                 placeholder="Password"
                 secureTextEntry={true}
                 placeholderTextColor="#ffffff"
                 ref={(input) => this.password = input}/>
                <TouchableOpacity style={styles.button}> 
                    <Text style={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {       
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
    },
    inputBox: {
        width:300, 
        height:45,
        backgroundColor:'#EE7600',
        paddingHorizontal:16,    
        borderRadius:25,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff'
    },   
    button: {
        backgroundColor:'#008000',
        width:300,
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12
    },
    buttonText: {
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    }
});