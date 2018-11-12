import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class CreateForm extends React.PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    form: PropTypes.object
  };

  render() {
    const { visible, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        visible={visible}
        centered
        title="保存搜索"
        cancelText="取消"
        okText="确定"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form>
          <Form.Item label="搜索名称" labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: '搜索名称不能为空!'
                }
              ]
            })(<Input />)}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default CreateForm;
