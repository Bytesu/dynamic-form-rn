// import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Ionicons';
// import {IconConstant} from './icon';

import React from "react";

/**
 * 自定义图标
 * props.name 图标名称
 * props.onPress
 * props.size 大小
 * props.color 颜色
 * @param props
 * @returns {*}
 * @constructor
 */
export function IconCustom(props) {
    return <Icon
        name={props.name}
        onPress={props.onPress || (() => {
        })}
        size={props.size || 24}
        color={props.color || '#fff'}/>;
}

export {IconConstant} from './icon';
