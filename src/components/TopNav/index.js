import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'antd';
import SaveModal from './components/SaveModal';
import AddPanelModal from './components/AddPanelModal';
import { setModalVisible } from 'Actions/topNav';
import { TopNavContainer } from './style';

const TopNav = ({ navItem, handleModalVisible }) => {
  const handleClick = type => {
    switch (type) {
      case 'save':
        handleModalVisible(true);
        break;
      case 'addPanel':
        handleModalVisible(true);
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
      <SaveModal />
      <AddPanelModal />
    </TopNavContainer>
  );
};

TopNav.propTypes = {
  navItem: PropTypes.array.isRequired,
  handleModalVisible: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  handleModalVisible: isVisible => dispatch(setModalVisible(isVisible))
});

export default connect(
  null,
  mapDispatchToProps
)(TopNav);
