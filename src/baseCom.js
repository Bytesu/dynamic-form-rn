import {TextInput,Picker,ActivityIndicator} from "react-native";
import React from "react";

/**
 * input com
 * @param props
 * @returns {*}
 * @private
 */
export function _TextInput(props) {
    let item = props;
    return <TextInput
        onChangeText={item.change}
        clearButtonMode={false}//清除
        placeholder={item.placeholder || ''}
        defaultValue={item.value || ''}
        style={{
            width: 150,
            height: 40,
            background: '#fff',
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
        }}
        key={item.name}
    ></TextInput>
}

/**
 * loading com
 * @returns {*}
 * @private
 */
export function _Loading(){
    return   <ActivityIndicator size="small" color="#00ff00" />;
}

export function _Picker(){
    return <Picker
        // selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
    </Picker>
}
