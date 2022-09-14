import { FlatList } from "react-native";
import React from "react";

const CustomFlatList= ({ data,renderItem,keyExtractor, showsVerticalScrollIndicator}) => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        />
    )
}
export default CustomFlatList;