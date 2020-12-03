import Form, {FormType} from '../';
import React from "react";

beforeEach(() => {
});


afterEach(() => {
});
describe('FormSu', () => {
    describe('initialize', () => {
        it('renders the label if label provided', () => {
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
            <Form
                list={formTestData}
            ></Form>
            // expect(1).toBe(1)
        });
    })
})
