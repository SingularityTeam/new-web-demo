import React, { Fragment, PureComponent } from 'react';
import { Button, Form } from 'antd';
import CreateRoll from './CreateRoll';
import RollInfo from './RollInfo';

const RollModal = Form.create()(CreateRoll);

class Roll extends PureComponent {
  state = { visible: false };

  showModal = () => {
    this.setState(() => ({ visible: true }));
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (!err) {
        form.resetFields();
        this.setState(() => ({ visible: false }));
      }
    });
  };

  handleCancel = () => {
    this.setState(() => ({ visible: false }));
  };

  render() {
    return (
      <Fragment>
        <Button type="primary" icon="plus" onClick={this.showModal}>
          创建卷
        </Button>

        <RollModal
          wrappedComponentRef={formRef => (this.formRef = formRef)}
          visible={this.state.visible}
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
        />

        <div className="panel-wrapper">
          <RollInfo />
        </div>
      </Fragment>
    );
  }
}

export default Roll;
