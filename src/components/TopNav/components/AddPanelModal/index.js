import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, List } from 'antd';
import { setAddPanelModalVisible } from 'Actions/topNav';
import { addPanel } from 'Actions/dashboard';
import { PanelItem } from './style';
import BaseVis from 'Pages/Visualize/components/VisChart/BaseVis';
import { VerticalBarSeries, LineSeries, MarkSeries } from 'react-vis';

const panels = [
  {
    id: 1,
    title: 'React Vis 直方图',
    Component: <BaseVis VisSeries={VerticalBarSeries} />
  },
  {
    id: 2,
    title: 'React Vis 折线图',
    Component: <BaseVis VisSeries={LineSeries} />
  },
  {
    id: 3,
    title: 'React Vis 散点图',
    Component: <BaseVis VisSeries={MarkSeries} />
  },
  {
    id: 4,
    title: 'Echarts 柱状图'
  },
  {
    id: 5,
    title: 'Echarts 关系图'
  }
];

const AddPanelModal = ({ visible, handleAddPanelModalVisible, handleAddPanel }) => (
  <Modal visible={visible} centered footer={null} title="添加可视化" onCancel={() => handleAddPanelModalVisible(false)}>
    <List
      bordered
      dataSource={panels}
      renderItem={panel => (
        <List.Item
          onClick={() => {
            handleAddPanel(panel);
            handleAddPanelModalVisible(false);
          }}
        >
          <PanelItem>{panel.title}</PanelItem>
        </List.Item>
      )}
    />
  </Modal>
);

AddPanelModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAddPanelModalVisible: PropTypes.func.isRequired,
  handleAddPanel: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  visible: state.getIn(['topNav', 'addPanel', 'modalVisible'])
});

const mapDispatchToProps = dispatch => ({
  handleAddPanelModalVisible: isVisible => dispatch(setAddPanelModalVisible(isVisible)),
  handleAddPanel: panel => dispatch(addPanel(panel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPanelModal);
