import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input, Select } from 'antd';

const { Item } = Form;
const { Option } = Select;
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 12 } }; // 表单布局

class CreateRaid extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCreate: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
    form: PropTypes.object
  };

  render() {
    const { visible, onCreate, onCancel, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal centered visible={visible} title="创建RAID" onOk={onCreate} onCancel={onCancel}>
        <Form>
          <Item {...formItemLayout} label="RAID名称">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入RAID名称' }]
            })(<Input placeholder="请输入RAID名称" />)}
          </Item>

          <Item {...formItemLayout} label="RAID级别">
            {getFieldDecorator('level', { initialValue: 'RAID5' })(
              <Select>
                <Option value="RAID0">RAID0</Option>
                <Option value="RAID5">RAID5</Option>
              </Select>
            )}
          </Item>

          <Item {...formItemLayout} label="条带大小">
            {getFieldDecorator('level', { initialValue: '256' })(
              <Select>
                <Option value="8">8KB</Option>
                <Option value="16">16KB</Option>
                <Option value="32">32KB</Option>
                <Option value="64">64KB</Option>
                <Option value="128">128KB</Option>
                <Option value="256">256KB</Option>
                <Option value="512">512KB</Option>
                <Option value="1024">1024KB</Option>
              </Select>
            )}
          </Item>
        </Form>
      </Modal>
    );
  }
}

export default CreateRaid;
