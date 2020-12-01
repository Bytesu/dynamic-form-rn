import 'react';
import {View} from 'react-native';
import React from 'react';
import {_FormType} from './const'
import {_Picker, _TextInput} from './baseCom'

export {
    _FormType as FormType
};
/**
 *
 * @returns {*}
 * @constructor
 */
export default class Form extends React.Component {
    constructor(props) {
        super(props);
        let normalizeData = this.normalizeList(props.list || []);
        this.state = {
            list: normalizeData.list,
            formData: normalizeData.formData
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(next, old) {//pre 父组件新属性

    }

    normalizeItem(item) {
        item.change = function () {
        }
        if (!item.placeholder) item.placeholder = '请输入' + item.label;
    }

    normalizeList(list) {
        const self = this, formData = {};//初始值缓存
        list.map(item => {
            if (item instanceof Array) { //
                item.map(ele => self.normalizeItem(ele))
            } else {
                self.normalizeItem(item)
            }
        })
        return {
            list,
            formData,
        };
    }

    componentWillUnmount() {

    }

    validator() {
    }


    submit() {
        return this.formData || {}
    }

    genCom(item) {
        if (item.type == _FormType.SELECT) return <_Picker {...item}></_Picker>
        return <_TextInput {...item}></_TextInput>
    }


    render() {
        const self = this;
        return <View>
            {
                this.state.list.map((item, index) => {
                    if (item instanceof Array) {
                        return <View>{item.map(ele => {
                            self.genCom(ele)
                        })}</View>
                    }
                    return self.genCom(item)
                })
            }
        </View>;
    }
}



