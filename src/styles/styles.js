import React from 'react';
import { Text, View,StyleSheet,Dimensions } from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    header:{
        backgroundColor:'#f6f6f6',
        height: '20%'
    },
    topHead:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderBottomColor:'#EBE8EB',
        borderBottomWidth:Dimensions.get('screen').width /150,
        padding:Dimensions.get('screen').height /50
    },
    textStyle:{
        color: '#2d2a2d',
        fontSize:Dimensions.get('screen').height /50
    },
    topHeadButtonStyle:{
        marginTop:'3%',
        
    }
})

export default styles;
