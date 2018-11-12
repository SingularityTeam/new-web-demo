import { SET_MODAL_VISIBLE } from '../constants/topNav';

const setModalVisible = isVisible => ({
  type: SET_MODAL_VISIBLE,
  isVisible
});

export { setModalVisible };
