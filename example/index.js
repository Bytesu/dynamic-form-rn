import Form, {FormType} from '../src/form/';
import {Button, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {toast} from '../src/toast'

const FormExample = function () {
    const form = useRef();
    const formTestData = [
        {
            label: '姓名', name: 'name',
            value: '苏伟明',
            type: FormType.INPUT,
        },
        {
            label: '邮箱', name: 'email',
            value: 'byte_su@163.com',
            type: FormType.SELECT,
            // placeholder: '请输入姓名'
        },
        [
            {
                label: '性别', name: 'SELECT',
                value: 'byte_su@163.com',
                type: FormType.INPUT,
                // placeholder: '请输入姓名'
            },
            {
                label: '邮箱', name: 'email2',
                type: FormType.INPUT,
                value: 'byte_su@163.com',
            },

        ],
        {
            label: '描述', name: 'desc',
            value: '',
            type: FormType.TEXTAREA,
        },
    ];
    const [formData, setFormData] = useState([...formTestData])
    return <View
        style={{backgroundColor:'#eee',width:'90%'}}
    >
        <Form
            ref={form}
            list={formData}
        ></Form>
        <Button
            onPress={() => {
                toast('success')
                console.log(form.current.submit())
                setFormData([...formTestData.slice(0, 1)])

            }}
            title="提交1212"></Button>
        <Button
            onPress={() => {
                console.log(form.current.submit())
                setFormData([...formTestData])
            }}
            title="RESET"></Button>
    </View>;
};

export default FormExample;
