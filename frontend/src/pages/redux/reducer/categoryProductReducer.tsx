import ActionTypes from "../action/actionType";

const initialState = {
    products_category: [],
    message: '',
    status: '',
    refresh: ''
}

function productCategoryReducers(state = initialState,action:any) {
    const { type,payload} = action;
    // console.log(payload);

    switch(type) {
        case ActionTypes.GET_PRODUCTS_CATEGORY_RESPONSE:
            return {state,products_category:payload,refresh:true}
            
        // case ActionTypes.ADD_PRODUCT_RESPONSE:
        //     return {message: payload.message,  refresh:false}
            // case ActionTypes.UPDATE_PRODUCT:
            //     return {state,message:payload.message,refresh:false}
        default:
            return state
            
    }
}

export default productCategoryReducers