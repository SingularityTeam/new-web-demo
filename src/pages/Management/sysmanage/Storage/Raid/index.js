import React, { Fragment, PureComponent } from 'react';
import { Button, Form } from 'antd';
import CreateRaid from './CreateRaid';
import RaidInfo from './RaidInfo';

const RaidModal = Form.create()(CreateRaid);

class Disk extends PureComponent {
  state = { visible: false };

  showModal = () => {
    this.setState(() => ({ visible: true }));
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('接受到的表单值：', values);
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
          创建RAID
        </Button>

        <RaidModal
          // 经过 Form.create 之后如果要拿到 ref ，使用 rc-form 提供的 wrappedComponentRef
          wrappedComponentRef={formRef => this.formRef}
          visible={this.state.visible}
          onCreate={this.handleCreate}
          onCancel={this.handleCancel}
        />

        <div className="panel-wrapper">
          <RaidInfo />
        </div>
      </Fragment>
    );
  }
}

export default Disk;
