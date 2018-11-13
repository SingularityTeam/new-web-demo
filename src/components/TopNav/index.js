import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import SaveModal from './components/SaveModal';
import AddPanelModal from './components/AddPanelModal';
import { TopNavContainer } from './style';

const TopNav = ({ navItem }) => (
  <TopNavContainer>
    {
      navItem.map(({ type, icon }) => (
        <Button key={type} icon={icon} />
      ))
    }
    <Button icon="plus">新建</Button>
    <SaveModal />
    <Button icon="folder-open">打开</Button>
    <AddPanelModal />
  </TopNavContainer>
);

TopNav.propTypes = {
  navItem: PropTypes.array.isRequired
};

export default TopNav;
