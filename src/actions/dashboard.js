import { fromJS } from 'immutable';
import { ADD_PANEL } from '../constants/dashboard';

const addPanel = panel => {
  return {
    type: ADD_PANEL,
    panel: fromJS(panel)
  };
};

export { addPanel };
