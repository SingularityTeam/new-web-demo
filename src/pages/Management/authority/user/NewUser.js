import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Table, Radio } from 'antd';

const FormItem = Form.Item;
const { TextArea } = Input;
const { Column } = Table;

class NewUserForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object.isRequired
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    // FormItem 的样式布局
    const formItemLayoout = {
      labelCol: { span: 1 },
      wrapperCol: { span: 6 },
      colon: false // 不显示 label 后面的冒号
    };

    return (
      <Form>
        <FormItem {...formItemLayoout} label="用户名">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名' }]
          })(<Input placeholder="请输入用户名" />)}
        </FormItem>

        <FormItem {...formItemLayoout} label="显示名">
          {getFieldDecorator('displayName', {
            rules: [{ required: true, message: '请输入显示名' }]
          })(<Input placeholder="请输入显示名" />)}
        </FormItem>

        <FormItem {...formItemLayoout} label="邮箱">
          {getFieldDecorator('email')(<Input placeholder="请输入邮箱" />)}
        </FormItem>

        <FormItem {...formItemLayoout} label="角色">
          <Table >
            <Column title="角色" dataIndex="role" align="center" />
            <Column title="描述" dataIndex="description" align="center" />
          </Table>
          {/* {getFieldDecorator('role')(<Radio />)} */}
        </FormItem>

        <FormItem {...formItemLayoout} label="描述">
          {getFieldDecorator('description')(<TextArea rows={6} />)}
        </FormItem>
      </Form>
    );
  }
}

const NewUser = Form.create()(NewUserForm);

export default NewUser;
