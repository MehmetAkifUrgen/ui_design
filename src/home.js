import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Styles from './styles/styles'
import TopHeadButton from './component/topHeadButton';
const Home = ({
    params,
}) => (
    <View style={Styles.container}>
        <View style={Styles.header}>
            <View style={Styles.topHead}>
                <TopHeadButton topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={Styles.textStyle} topHeadText={"Cancel"}></TopHeadButton>
                <TopHeadButton topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={Styles.textStyle} topHeadText={"Choose Music"}></TopHeadButton>
                <TopHeadButton topHeadButtonStyle={Styles.topHeadButtonStyle} textStyle={Styles.textStyle} topHeadText={"Done"}></TopHeadButton>
            </View>
        </View>
    </View>
);

export default Home;
