import React from 'react';
import { Text, View,StyleSheet,Dimensions } from 'react-native';

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFFDFF'
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
        
    },
    mainItem:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginVertical:Dimensions.get('screen').height /60,
        marginHorizontal:Dimensions.get('screen').width /20,
        justifyContent:'space-between'
    },
    mainImage:{
        width:Dimensions.get('screen').width /9,
        height:Dimensions.get('screen').height /15,
        borderRadius:Dimensions.get('screen').height /50
    },
    itemButton:{
        justifyContent:'center',
        alignItems:'center',
        padding:Dimensions.get('screen').height /80,
        backgroundColor:'#F5F2F5',
        borderRadius:Dimensions.get('screen').height /25
    },
    itemButtonText:{
        color:'#000000',
        fontSize:Dimensions.get('screen').height /50
    },
    mainItemLeftView:{
        flexDirection:'row',
        width:Dimensions.get('screen').width /2,
        alignItems:'center'
    },
    leftDetailView:{
        marginLeft:Dimensions.get('screen').width /30,
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
    songText:{
        fontWeight:'bold',
        fontSize:Dimensions.get('screen').height /50
    },
    songDetailText:{
        color:'#afafaf',
        fontSize:Dimensions.get('screen').height /60
    },
    mainImageView:{
        borderRadius:Dimensions.get('screen').height /50,
        padding:Dimensions.get('screen').height /220,
        borderColor:'#d4cfd0',
        borderWidth:Dimensions.get('screen').width /200
    }
})

export default styles;
