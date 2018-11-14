import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, List } from 'antd';
import { setOpenModalVisible } from 'Actions/topNav';
import { SavedItem } from './style';

const OpenModal = ({ typeName, visible, discoverMeta, visualizeMeta, dashboardMeta, handleOpenModalVisible }) => {
  let saveTypeName = '';
  let metaData = [];

  switch (typeName) {
    case 'discover':
      saveTypeName = '搜索';
      metaData = discoverMeta;
      break;
    case 'visualize':
      saveTypeName = '可视化';
      metaData = visualizeMeta;
      break;
    case 'dashboard':
      saveTypeName = '仪表盘';
      metaData = dashboardMeta;
      break;
  }

  return (
    <Modal
      visible={visible}
      centered
      footer={null}
      title={'打开已存' + saveTypeName}
      onCancel={() => handleOpenModalVisible(false)}
    >
      <List
        bordered
        dataSource={metaData.toJS()}
        locale={{ emptyText: `暂无${saveTypeName}` }}
        renderItem={meta => (
          <List.Item
            onClick={() => {
              handleOpenModalVisible(false);
            }}
          >
            <SavedItem>{meta.title}</SavedItem>
          </List.Item>
        )}
      />
    </Modal>
  );
};

OpenModal.propTypes = {
  typeName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  discoverMeta: PropTypes.any,
  visualizeMeta: PropTypes.any,
  dashboardMeta: PropTypes.any,
  handleOpenModalVisible: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visible: state.getIn(['topNav', 'open', 'modalVisible']),
  discoverMeta: state.getIn(['topNav', 'save', 'saveDiscoverMeta']),
  visualizeMeta: state.getIn(['topNav', 'save', 'saveVisualizeMeta']),
  dashboardMeta: state.getIn(['topNav', 'save', 'saveDashboardMeta'])
});

const mapDispatchToProps = dispatch => ({
  handleOpenModalVisible: isVisible => dispatch(setOpenModalVisible(isVisible))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OpenModal);
