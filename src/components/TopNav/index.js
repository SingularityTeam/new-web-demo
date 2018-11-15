import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import SaveModal from './components/SaveModal';
import AddPanelModal from './components/AddPanelModal';
import OpenModal from './components/OpenModal';
import { setSaveModalVisible, setOpenModalVisible, setAddPanelModalVisible } from 'Actions/topNav';
import { TopNavContainer } from './style';

const TopNav = ({
  typeName,
  navItem,
  DiscoverTable,
  handleSaveModalVisible,
  handleOpenModalVisible,
  handleAddPanelModalVisible
}) => {
  const handleClick = type => {
    switch (type) {
      case 'new':
        break;
      case 'save':
        handleSaveModalVisible(true);
        break;
      case 'open':
        handleOpenModalVisible(true);
        break;
      case 'addPanel':
        handleAddPanelModalVisible(true);
        break;
    }
  };

  return (
    <TopNavContainer>
      {navItem.map(({ type, icon, name }) => (
        <Button key={type} icon={icon} onClick={() => handleClick(type)}>
          {name}
        </Button>
      ))}
      <SaveModal typeName={typeName} DiscoverTable={DiscoverTable} />
      <OpenModal typeName={typeName} />
      <AddPanelModal />
    </TopNavContainer>
  );
};

TopNav.propTypes = {
  typeName: PropTypes.string.isRequired,
  navItem: PropTypes.array.isRequired,
  DiscoverTable: PropTypes.func,
  handleSaveModalVisible: PropTypes.func.isRequired,
  handleOpenModalVisible: PropTypes.func.isRequired,
  handleAddPanelModalVisible: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleSaveModalVisible: isVisible => dispatch(setSaveModalVisible(isVisible)),
  handleOpenModalVisible: isVisible => dispatch(setOpenModalVisible(isVisible)),
  handleAddPanelModalVisible: isVisible => dispatch(setAddPanelModalVisible(isVisible))
});

export default connect(
  null,
  mapDispatchToProps
)(TopNav);
