import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import '../../../style.less';
const FormItem = Form.Item;
const SnmpServeConfigForm = ({ form }) => {
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 8 },
      lg: { span: 8 }
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
      md: { span: 16 },
      lg: { span: 16 }
    }
  };
  return (
    <div className="snmp-serve">
      <div className='snmp-serve-text'>SNMP服务器配置</div>
      <Row>
        <Col span={8}>
          <Form layout="vertical">
            <FormItem label="邮件服务器(SNMP)" {...formItemLayout}>
              {getFieldDecorator('emailServe', {
                rules: [{ required: true, message: '请输入SNMP地址' }]
              })(<Input />)}
            </FormItem>
            <FormItem label="端口" {...formItemLayout}>
              {getFieldDecorator('port', {
                rules: [{ required: true, message: '请输入端口' }]
              })(<Input />)}
            </FormItem>
            <FormItem label="邮件地址" {...formItemLayout}>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入邮件地址' }]
              })(<Input />)}
            </FormItem>
            <FormItem label="邮件密码" {...formItemLayout}>
              {getFieldDecorator('emialPassword', {
                rules: [{ required: true, message: '请输入邮件密码' }]
              })(<Input />)}
            </FormItem>
            <FormItem wrapperCol={{xs:{span:24},sm:{span:24},md:{span:16, offset: 8},lg:{span:16, offset: 8}}}>
              <Button>保存</Button>
              <Button className='snmp-btn'>测试</Button>
            </FormItem>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

SnmpServeConfigForm.propTypes = {
  form: PropTypes.object
};

const SnmpServeConfig = Form.create()(SnmpServeConfigForm);
export default SnmpServeConfig;
