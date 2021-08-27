import React,{useState,useEffect} from 'react';
import {View,Dimensions } from 'react-native';
import Styles from './styles/styles'
import TopHeadButton from './component/topHeadButton';
import List from './component/list'
import jsonData from './JsonData/data.json'
const Home = ({
    params,
}) => {
    const [cancel,setCancel]=useState(false)
    const [music,setMusic]=useState(false)
    const [done,setDone]=useState(false)
    return(
        <View style={Styles.container}>
        <View style={Styles.header}>
            <View style={Styles.topHead}>
                <TopHeadButton onPress={()=> {setCancel(true),setDone(false),setMusic(false)}}  topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={cancel==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Cancel"}></TopHeadButton>
                <TopHeadButton onPress={()=> {setCancel(false),setDone(false),setMusic(true)}} topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={music==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Choose Music"}></TopHeadButton>
                <TopHeadButton onPress={()=> {setCancel(false),setDone(true),setMusic(false)}} topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={done==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Done"}></TopHeadButton>
            </View>
            <List
                data={jsonData.data}
            />
        </View>
    </View>
    )
    

}
export default Home;
