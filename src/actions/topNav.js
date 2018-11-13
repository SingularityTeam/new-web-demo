import { fromJS } from 'immutable';
import { SET_MODAL_VISIBLE, SAVE_DISCOVER, SET_ADD_PANEL_MODAL_VISIBLE } from '../constants/topNav';

const setModalVisible = isVisible => ({
  type: SET_MODAL_VISIBLE,
  isVisible
});

const saveDiscover = meta => {
  return {
    type: SAVE_DISCOVER,
    meta: fromJS(meta)
  };
};

const setAddPanelModalVisible = isVisible => ({
  type: SET_ADD_PANEL_MODAL_VISIBLE,
  isVisible
});

export { setModalVisible, saveDiscover, setAddPanelModalVisible };
