import { 
    NETWORK_STATUS_CHANGE
} from '../actions/types'

const INITIAL_STATE = {
    isOnline: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case NETWORK_STATUS_CHANGE: 
            return { ...state, isOnline: action.payload };

        default: return state;
    }
};