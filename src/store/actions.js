import { SET_API_CARDS } from "./ActionTypes";


export const setApiCards = data => ({
    type: SET_API_CARDS,
    payload: {
        data
    }
});
