import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 12 } };

class CreateRoll extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    form: PropTypes.object
  };

  render() {
    const { visible, onCreate, onCancel, form } = this.props;
    const { getFieldDecorator } = form;

    const selectAfter = (
      <Select defaultValue="GB">
        <Option value="GB">GB</Option>
        <Option value="TB">TB</Option>
      </Select>
    );

    return (
      <Modal
        centered
        visible={visible}
        title="创建卷"
        okText="确定"
        cancelText="取消"
        onOk={onCreate}
        onCancel={onCancel}
      >
        <Form>
          <Item {...formItemLayout} label="卷名称">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入卷名称' }]
            })(<Input placeholder="请输入卷名称" />)}
          </Item>

          <Item {...formItemLayout} label="卷类型">
            {getFieldDecorator('type', { initialValue: 'dataRoll' })(
              <Select>
                <Option value="dataRoll">数据卷</Option>
              </Select>
            )}
          </Item>

          <Item {...formItemLayout} label="卷容量">
            {getFieldDecorator('dataRoll', {
              rules: [{ required: true, message: '请输入卷容量' }]
            })(<Input placeholder="请输入卷容量" addonAfter={selectAfter} />)}
          </Item>
        </Form>
      </Modal>
    );
  }
}

export default CreateRoll;
