import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Form, Input } from 'antd';

class CreateForm extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    saveTypeName: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onCreate: PropTypes.func.isRequired,
    form: PropTypes.object
  };

  render() {
    const { visible, saveTypeName, onCancel, onCreate, form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <Modal
        visible={visible}
        centered
        title={'保存' + saveTypeName}
        cancelText="取消"
        okText="确定"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form>
          <Form.Item label={saveTypeName + '名称'} labelCol={{ span: 5 }} wrapperCol={{ span: 16 }}>
            {getFieldDecorator('title', {
              rules: [
                {
                  required: true,
                  message: `${saveTypeName}名称不能为空!`
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
