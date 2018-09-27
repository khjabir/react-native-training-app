import { 
    SPIN_THE_WHEEL
} from '../actions/types'

const INITIAL_STATE = {
    isSpinning: false,
    lastSpinnedDate: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {

        case SPIN_THE_WHEEL: 
            return { ...state, isSpinning: action.payload, lastSpinnedDate: Date.now() };

        default: return state;
    }
};