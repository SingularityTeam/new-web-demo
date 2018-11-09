import { CHANGE_COLLAPSED, CHANGE_KEYPATH } from '../constants/home';

const changeCollapsed = () => ({
  type: CHANGE_COLLAPSED
});

const changeKeyPath = keyPath => ({
  type: CHANGE_KEYPATH,
  keyPath
});

export { changeCollapsed, changeKeyPath };
