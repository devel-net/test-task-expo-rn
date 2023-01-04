import {SET_API_CARDS} from "./ActionTypes";

const initialState = {
    apiCards: [],
};
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_API_CARDS:
            return {
                ...state,
                apiCards: action.payload.data
            }
        default:
            return state;
    }
};
