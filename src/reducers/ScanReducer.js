import { 
    SCAN_SUCCESS
} from '../actions/types'

const INITIAL_STATE = {
    scannedList: [],
    scannedItem: ''
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case SCAN_SUCCESS: 
            return { ...state, scannedItem: action.payload };

        default: return state;
    }
};