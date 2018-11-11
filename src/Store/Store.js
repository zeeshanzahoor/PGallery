import { combineReducers } from 'redux';

const INITIAL_STATE = {
    Locked: false,
};

const AppLock = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Unlock":
            return {
                Locked: false,
            };
        case "Lock":
        default:
            return state
    }
};

export default combineReducers({
    AppLock: AppLock,
});