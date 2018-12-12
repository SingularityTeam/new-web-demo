import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

const { Item } = Form;
const formItemLayout = { labelCol: { span: 4 }, wrapperCol: { span: 12 } };

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
      <Modal visible={visible} title="创建RAID" okText="确定" cancelText="取消" onOk={onCreate} onCancel={onCancel}>
        <Form>
          <Item {...formItemLayout}>
            {getFieldDecorator('title', {
              rules: [{ required: true, message: '请输入RAID名称' }]
            })(<Input placeholder="请输入RAID名称" />)}
          </Item>
        </Form>
      </Modal>
    );
  }
}

export default CreateRaid;
