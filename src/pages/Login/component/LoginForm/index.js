import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, message } from 'antd';
import { setLoggedUser } from 'Actions/login';

const FormItem = Form.Item;

class LoginForm extends PureComponent {
  static propTypes = {
    form: PropTypes.object,
    history: PropTypes.object,
    loginApp: PropTypes.func.isRequired
  };

  // 登录验证
  handleSubmit = e => {
    const { form, history, loginApp } = this.props;
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (values.username === 'admin' && values.password === '123456') {
          setTimeout(() => {
            loginApp(true);
            history.push('/home');
            message.success('登录成功！');
          }, 500);
        } else {
          message.error('登录失败，请检查用户名和密码是否正确！');
        }
      }
    });
  };

  render() {
    // 经过 Form.create 包装的组件将会自带 this.props.form 属性，提供用于表单验证的 API
    const { getFieldDecorator } = this.props.form;

    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          <h2 className="login-form-text">欢迎登录</h2>
        </FormItem>
        <FormItem>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名！' }]
          })(<Input prefix={<Icon type="user" className="input-prefix-icon" />} placeholder="用户名" />)}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }]
          })(<Input prefix={<Icon type="lock" className="input-prefix-icon" />} type="password" placeholder="密码" />)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

const mapStateToDispatch = dispatch => ({
  loginApp: logged => dispatch(setLoggedUser(logged))
});

export default connect(
  null,
  mapStateToDispatch
)(WrappedLoginForm);
