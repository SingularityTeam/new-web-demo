import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form } from 'antd';
import CreateForm from './CreateForm';
import { setModalVisible } from 'Actions/topNav';

const CreateModal = Form.create()(CreateForm);

const SaveModal = ({ modalVisible, handleModalVisible }) => {
  let saveFormRef = null;

  /**
   * 表单字段验证
   */
  const handleCreateModal = () => {
    const { form } = saveFormRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('接受到表单的值', values);
      form.resetFields();
      handleModalVisible(false);
    });
  };

  return (
    <Fragment>
      <Button icon="save" onClick={() => handleModalVisible(true)}>
        保存
      </Button>
      <CreateModal
        wrappedComponentRef={formRef => (saveFormRef = formRef)}
        visible={modalVisible}
        onCancel={() => handleModalVisible(false)}
        onCreate={handleCreateModal}
      />
    </Fragment>
  );
};

SaveModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  handleModalVisible: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  modalVisible: state.getIn(['topNav', 'modalVisible'])
});

const mapDispatchToProps = dispatch => ({
  handleModalVisible: isVisible => dispatch(setModalVisible(isVisible))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveModal);
