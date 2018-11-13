import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, message } from 'antd';
import CreateForm from './CreateForm';
import { setModalVisible, saveDiscover } from 'Actions/topNav';

const CreateModal = Form.create()(CreateForm);

const SaveModal = ({ modalVisible, discoverMeta, handleModalVisible, handlesaveDiscover }) => {
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

      form.resetFields();
      const saveMeta = discoverMeta.merge(values);
      handlesaveDiscover(saveMeta); // 保存搜索信息
      handleModalVisible(false);
      message.success('保存成功！');
    });
  };

  return (
    <CreateModal
      wrappedComponentRef={formRef => (saveFormRef = formRef)}
      visible={modalVisible}
      onCancel={() => handleModalVisible(false)}
      onCreate={handleCreateModal}
    />
  );
};

SaveModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  discoverMeta: PropTypes.object.isRequired,
  handleModalVisible: PropTypes.func.isRequired,
  handlesaveDiscover: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  modalVisible: state.getIn(['topNav', 'save', 'modalVisible']),
  discoverMeta: state.get('discover')
});

const mapDispatchToProps = dispatch => ({
  handleModalVisible: isVisible => dispatch(setModalVisible(isVisible)),
  handlesaveDiscover: values => dispatch(saveDiscover(values))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveModal);
