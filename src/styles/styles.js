import React from 'react';
import { Text, View,StyleSheet } from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        backgroundColor:'#f6f6f6',
        height: '15%'
    },
    topHead:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    textStyle:{
        color: '#2d2a2d',
        fontSize:16
    },
    topHeadButtonStyle:{
        marginTop:'3%'
    }
})

export default styles;
