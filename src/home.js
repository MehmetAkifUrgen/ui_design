import React,{useState,useEffect} from 'react';
import {View,Dimensions,Text,FlatList, TouchableOpacity,Image } from 'react-native';
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


    const renderItem = ({item}) => {
        const type=item.tags[0]
        const capitalize =(type)=> {
            const lower = type.toLowerCase();
            return type.charAt(0).toUpperCase() + lower.slice(1);
          }
        return(
           <View style={Styles.mainItem}>
               <View style={Styles.mainItemLeftView}>
                   <View style={Styles.mainImageView}>
                   <Image style={Styles.mainImage} source={{uri:item.thumbUrl}} />
                   </View>
                   
                   <View style={Styles.leftDetailView}>
                        <Text style={Styles.songText}>
                            {item.name}
                        </Text>
                        <Text style={Styles.songDetailText}>
                            {item.artistName}
                        </Text>
                        <Text style={Styles.songDetailText}>
                            #{capitalize(type)}
                        </Text>
                   </View>
               </View>
               <TouchableOpacity style={Styles.itemButton}>
                   <Text style={Styles.itemButtonText} >
                       Choose
                   </Text>
               </TouchableOpacity>
                
           </View>
        )
    }
    
    return(
        <View style={Styles.container}>
        <View style={Styles.header}>
            <View style={Styles.topHead}>
                <TopHeadButton onPress={()=> {setCancel(true),setDone(false),setMusic(false)}}  topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={cancel==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Cancel"}></TopHeadButton>
                <TopHeadButton onPress={()=> {setCancel(false),setDone(false),setMusic(true)}} topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={music==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Choose Music"}></TopHeadButton>
                <TopHeadButton onPress={()=> {setCancel(false),setDone(true),setMusic(false)}} topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={done==true  ? [Styles.textStyle,{fontSize:Dimensions.get('screen').height /40}]: Styles.textStyle} topHeadText={"Done"}></TopHeadButton>
            </View>
            
        </View>
        <FlatList
            data={Object.values(jsonData.data)}
            renderItem={renderItem}
        />
    </View>
    )
    

}
export default Home;
