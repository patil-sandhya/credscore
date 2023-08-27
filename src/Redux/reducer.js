import { LOGIN_FAILURE,LOGIN_REQUEST,LOGIN_SUCCESS, REGISTER_SUCCESS } from "./actionTypes"
const initialState = {
    isAuth:false,
    isError: false,
    isLoading:false,
    token:"",
   Register:[]
}

export const reducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case LOGIN_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case LOGIN_SUCCESS :
            return {...state,isLoading:false,isAuth: true,token : payload}
            case REGISTER_SUCCESS :
                return {...state,Register:payload}
        default :
           return state
        }
}