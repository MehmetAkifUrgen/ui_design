import React from 'react';
import {FlatList } from 'react-native';

const List = (
    props,
) => (
    <FlatList 
        data={props.data}
        renderItem={props.renderItem}
        horizontal={true}
        
    >

    </FlatList>
);

export default List;
