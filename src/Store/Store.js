import { combineReducers } from 'redux';
import realm from '../DB/Schema.js';


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

const INITIAL_APP_STATE = {
    Swiper: false,
    SwiperFullScreen: false,
}
const AppState = (state = INITIAL_APP_STATE, action) => {
    switch (action.type) {
        case "OpenSwiper":
            return {
                Swiper: true,
                SwiperFullScreen: false,
            };
        case "CloseSwiper":
            return INITIAL_APP_STATE;

        case "OpenSwiperFullScreen":
            return {
                Swiper: true,
                SwiperFullScreen: true,
            };
        case "CloseSwiperFullScreen":
            return {
                Swiper: true,
                SwiperFullScreen: false,
            };
        default:
            return state
    }
};

export default combineReducers({
    AppLock: AppLock,
    AppState:AppState,
    realm,
});