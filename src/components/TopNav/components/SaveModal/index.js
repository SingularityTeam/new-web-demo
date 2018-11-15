import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
import { Form, message } from 'antd';
import CreateForm from './CreateForm';
import { setSaveModalVisible, saveDiscover, saveVisualize, saveDashboard } from 'Actions/topNav';

const CreateModal = Form.create()(CreateForm);

const SaveModal = ({
  typeName,
  modalVisible,
  DiscoverTable,
  handleSaveModalVisible,
  handleSaveDiscover,
  handleSaveVisualize,
  handleSaveDashboard
}) => {
  let saveFormRef = null;
  let saveTypeName = '';

  switch (typeName) {
    case 'discover':
      saveTypeName = '搜索';
      break;
    case 'visualize':
      saveTypeName = '可视化';
      break;
    case 'dashboard':
      saveTypeName = '仪表盘';
      break;
  }

  /**
   * 表单字段验证
   */
  const handleCreateModal = () => {
    const { form } = saveFormRef.props;

    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      let component = null;

      // 保存信息
      switch (typeName) {
        case 'discover':
          component = fromJS({ Component: DiscoverTable });
          handleSaveDiscover(component.merge(values));
          break;
        case 'visualize':
          // handleSaveVisualize(visualizeMeta.merge(values));
          break;
        case 'dashboard':
          // handleSaveDashboard(dashboardMeta.merge(values));
          break;
      }

      form.resetFields();
      handleSaveModalVisible(false);
      message.success('保存成功！');
    });
  };

  return (
    <CreateModal
      wrappedComponentRef={formRef => (saveFormRef = formRef)}
      visible={modalVisible}
      saveTypeName={saveTypeName}
      onCancel={() => handleSaveModalVisible(false)}
      onCreate={handleCreateModal}
    />
  );
};

SaveModal.propTypes = {
  typeName: PropTypes.string.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  DiscoverTable: PropTypes.func,
  handleSaveModalVisible: PropTypes.func.isRequired,
  handleSaveDiscover: PropTypes.func.isRequired,
  handleSaveVisualize: PropTypes.func.isRequired,
  handleSaveDashboard: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  modalVisible: state.getIn(['topNav', 'save', 'modalVisible'])
});

const mapDispatchToProps = dispatch => ({
  handleSaveModalVisible: isVisible => dispatch(setSaveModalVisible(isVisible)),
  handleSaveDiscover: meta => dispatch(saveDiscover(meta)),
  handleSaveVisualize: meta => dispatch(saveVisualize(meta)),
  handleSaveDashboard: meta => dispatch(saveDashboard(meta))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveModal);
