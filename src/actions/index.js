import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGGING_IN,
    SCAN_SUCCESS,
    SPIN_THE_WHEEL,
    NETWORK_STATUS_CHANGE
 } from './types'

 /* ******************************* Login Form *********************************** */
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {

        dispatch({ type: LOGGING_IN })

        setTimeout(() => {            
            if(email.toLowerCase() === 'wings' && password.toLowerCase() === 'wings') {
                dispatch({ type: LOGIN_SUCCESS, payload: {user: 'wings'} });
                navigation.navigate('Menu');
            }
            else {
                dispatch({ type: LOGIN_FAIL })
            }
        }, 1500);
    };
}

 /* ******************************* Scan *********************************** */
export const scanSuccess = (scannedData) => {
        return {
            type: SCAN_SUCCESS, 
            payload: scannedData
        };
}



 /* ******************************* Spin *********************************** */

export const spinTheWheel = (action) => {
    return {
        type: SPIN_THE_WHEEL,
        payload: action
    }
}

 /* ******************************* Common *********************************** */

export const networkStatusChanged = (status) => {
    return {
        type: NETWORK_STATUS_CHANGE,
        payload: status
    }
}