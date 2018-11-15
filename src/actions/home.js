import { fromJS } from 'immutable';
import { CHANGE_KEYPATH } from '../constants/home';

const changeKeyPath = keyPath => ({
  type: CHANGE_KEYPATH,
  keyPath: fromJS(keyPath)
});

export { changeKeyPath };
