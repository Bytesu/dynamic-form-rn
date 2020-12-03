import {ActivityIndicator, Picker, TextInput} from "react-native";
import React from "react";
import _ from 'lodash';

/**
 * input com
 * @param props
 * @returns {*}
 * @private
 */
export function _TextInput(props) {
    let item = props;
    const handleChangeDebounce = _.debounce(props.change || function (v) {
    }, 500, {'maxWait': 1000});

    return <TextInput
        onChangeText={(v) => {
            handleChangeDebounce({
                [item.name]:v
            });
        }}
        clearButtonMode='never'//清除
        placeholder={item.placeholder || ''}
        defaultValue={item.value || ''}
        style={{
            width: 150,
            height: 40,
            backgroundColor: '#fff',
            borderRadius: 2,
            borderColor: '#eee',
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
export function _Loading() {
    return <ActivityIndicator size="small" color="#00ff00"/>;
}

export function _Picker() {
    return <Picker
        // key={item._key}
        // selectedValue={selectedValue}
        style={{
            height: 50, width: 150,
            background: '#fff',
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10
        }}
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
    >
        <Picker.Item label="Java" value="java"/>
        <Picker.Item label="JavaScript" value="js"/>
    </Picker>
}
