import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const TopHeadButton = (props) => (
    <TouchableOpacity onPress={props.onPress} style={props.topHeadButtonStyle}>
            <Text style={props.textStyle}> {props.topHeadText} </Text>

    </TouchableOpacity>
);

export default TopHeadButton;
