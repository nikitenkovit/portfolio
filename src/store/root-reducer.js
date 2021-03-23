import {combineReducers} from "redux";
import NameSpace from './name-space';
import settingSwitch from './setting-switch/reducer/reducer';

export default combineReducers({
  [NameSpace.SETTING_SWITCH]: settingSwitch
});
