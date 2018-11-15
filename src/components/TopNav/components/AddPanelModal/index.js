import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, List } from 'antd';
import { setAddPanelModalVisible } from 'Actions/topNav';
import { addPanel } from 'Actions/dashboard';
import { PanelItem } from './style';
import VerticalBar from 'Pages/Visualize/components/Charts/VerticalBar';
import Line from 'Pages/Visualize/components/Charts/Line';
import Mark from 'Pages/Visualize/components/Charts/Mark';
import Bar from 'Pages/Visualize/components/Charts/Bar';
import Graph from 'Pages/Visualize/components/Charts/Graph';

const panels = [
  {
    id: 1,
    title: 'React Vis 直方图',
    Component: <VerticalBar />
  },
  {
    id: 2,
    title: 'React Vis 折线图',
    Component: <Line />
  },
  {
    id: 3,
    title: 'React Vis 散点图',
    Component: <Mark />
  },
  {
    id: 4,
    title: 'Echarts 柱状图',
    Component: <Bar />
  },
  {
    id: 5,
    title: 'Echarts 关系图',
    Component: <Graph />
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
