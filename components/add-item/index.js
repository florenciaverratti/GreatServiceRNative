import { Button, TextInput, View } from "react-native";
import React, { Children } from "react";

import { styles } from "./styles";

const AddItem = ({ item, onChangeText, placeholder, addItem1, selectionColor, 
    placeholderTextColor, textButton1, color1, textButton2,color2,addItem2}) => {
        
    return (
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder={placeholder}
            style={styles.input}
            selectionColor={selectionColor}
            placeholderTextColor={placeholderTextColor}
            onChangeText={onChangeText}
            value={item}
        />
        <Button 
            title={textButton1}
            onPress={addItem1} 
            color={color1}
        />
        <Button 
            title={textButton2}
            onPress={addItem2}
            color={color2}
        />
    </View>
    )
}

export default AddItem;