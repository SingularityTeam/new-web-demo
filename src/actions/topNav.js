import { fromJS } from 'immutable';
import {
  SET_SAVE_MODAL_VISIBLE,
  SET_OPEN_MODAL_VISIBLE,
  SET_ADD_PANEL_MODAL_VISIBLE,
  SAVE_DISCOVER,
  SAVE_VISUALIZE,
  SAVE_DASHBOARD
} from '../constants/topNav';

const setSaveModalVisible = isVisible => ({
  type: SET_SAVE_MODAL_VISIBLE,
  isVisible: fromJS(isVisible)
});

const setOpenModalVisible = isVisible => ({
  type: SET_OPEN_MODAL_VISIBLE,
  isVisible: fromJS(isVisible)
});

const setAddPanelModalVisible = isVisible => ({
  type: SET_ADD_PANEL_MODAL_VISIBLE,
  isVisible: fromJS(isVisible)
});

const saveDiscover = meta => {
  return {
    type: SAVE_DISCOVER,
    meta: fromJS(meta)
  };
};

const saveVisualize = meta => {
  return {
    type: SAVE_VISUALIZE,
    meta: fromJS(meta)
  };
};

const saveDashboard = meta => {
  return {
    type: SAVE_DASHBOARD,
    meta: fromJS(meta)
  };
};

export {
  setSaveModalVisible,
  setOpenModalVisible,
  setAddPanelModalVisible,
  saveDiscover,
  saveVisualize,
  saveDashboard
};
