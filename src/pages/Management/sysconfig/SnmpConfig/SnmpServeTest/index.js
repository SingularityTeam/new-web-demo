import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import PropsType from 'prop-types';
import '../../../style.less';
const FormItem = Form.Item;
const SnmpServeTestForm = props => {
  const { getFieldDecorator } = props.form;
  const formItemWrapper = {
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
    <div className="snmp-test">
      <div className="snmp-test-info">SNMP服务器测试</div>
      <div className="snmp-test-form">
        <Row>
          <Col span={8}>
            <Form layout="vertical">
              <FormItem label="测试邮箱:" {...formItemWrapper}>
                {getFieldDecorator('testEmail', {})(<Input />)}
              </FormItem>
              <FormItem wrapperCol={{xs:{span:24}, sm: {span:24}, md: {span: 16, offset: 8}, lg: {span: 16, offset:8}}}>
                <Button>测试</Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

SnmpServeTestForm.propTypes = {
  form: PropsType.object
};

const SnmpServeTest = Form.create()(SnmpServeTestForm);
export default SnmpServeTest;
