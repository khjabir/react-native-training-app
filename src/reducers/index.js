import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ScanReducer from './ScanReducer';
import SpinReducer from './SpinReducer';
import CommonReducer from './CommonReducer';

export default combineReducers({ 
    auth: AuthReducer,
    scannedList: ScanReducer,
    spin: SpinReducer,
    common: CommonReducer
})