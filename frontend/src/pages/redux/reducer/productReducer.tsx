import ActionTypes from "../action/actionType";

const initialState = {
    products: [],
    message: '',
    status: '',
    refresh: ''
}

function productReducers(state = initialState,action:any) {
    const { type,payload} = action;
    // console.log(payload);

    switch(type) {
        case ActionTypes.GET_PRODUCTS_RESPONSE:
            return {state,products:payload.result,refresh:true}

        case ActionTypes.ADD_PRODUCT_RESPONSE:
            return {message: payload.message,  refresh:false}

        case ActionTypes.UPDATE_PRODUCT:
            return {state,message:payload.message,refresh:false}
            
        default:
            return state
            
    }
}

export default productReducers