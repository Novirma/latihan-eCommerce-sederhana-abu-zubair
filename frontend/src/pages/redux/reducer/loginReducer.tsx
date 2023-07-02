import ActionTypes from "../action/actionType";

const initialState = {
    token: '',
    message: '',
}

function loginReducers(state = initialState,action:any) {
    const { type,payload} = action;
    // console.log(payload);

    switch(type) {

        case ActionTypes.LOGIN_RESPONSE:
            return { state,token:payload.token,message:payload.message}

        default:
            return state
            
    }
}

export default loginReducers