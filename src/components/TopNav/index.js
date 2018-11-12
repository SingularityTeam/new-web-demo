import React from 'react';
import { Button } from 'antd';
import SaveModal from './components/SaveModal';
import { TopNavContainer } from './style';

const TopNav = () => (
  <TopNavContainer>
    <Button icon="plus">新建</Button>
    <SaveModal />
    <Button icon="folder-open">打开</Button>
  </TopNavContainer>
);

export default TopNav;
