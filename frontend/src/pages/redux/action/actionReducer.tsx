import ActionTypes from "./actionType";
// import apiMethod from "../../components/api/apiMethod";
import apiMethod from "../../api/apiMethod";

export const getAll = () => async(dispatch:any) => {
    try {
        const res = await apiMethod.findAll();
        // console.log(res.data);
        dispatch({
            type: ActionTypes.GET_USERS,
            payload: res.data[0]
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const createUserCustomer = (data:any):any => async(dispatch:any) => {
    try {
        const res = await apiMethod.create(data);
        dispatch({
            type: ActionTypes.ADD_USER,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const editUserCustomer = (data:any):any => async(dispatch:any) => {
    try {
        const res = await apiMethod.updateUserCustomerById(data);
        dispatch({
            type: ActionTypes.UPDATE_USER,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const deleteUserCustomer = (id:any):any => async(dispatch:any) => {
    try {
        const res = await apiMethod.deleteUserById(id)
        dispatch({
            type: ActionTypes.DEL_USER,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const getAllProduct = ():any => async(dispatch:any) => {
    try {
        const res = await apiMethod.getAllProduct()
        dispatch({
            type: ActionTypes.GET_PRODUCTS,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const createProduct = (data:any) => async(dispatch:any) => {
    try {
        const res = await apiMethod.insertProduct(data)
        dispatch({
            type: ActionTypes.ADD_PRODUCT,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const updateProduct = (data:any) => async(dispatch:any) => {
    try {
        const res = await apiMethod.updateProduct(data)
        dispatch({
            type: ActionTypes.UPDATE_PRODUCT,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const deleteProduct = (id:any) => async(dispatch:any) => {
    try {
        const res = await apiMethod.deleteProduct(id)
        dispatch({
            type: ActionTypes.DEL_PRODUCT,
            payload: res.data
        })
    } catch (error:any) {
        alert(error.message)
    }
}

export const doRequestGetUser = () =>{
    return{
        type: ActionTypes.REQ_GET_USERS,

    }
}

export const doGetUserResponse = (payload:any) =>{
    return{
        type: ActionTypes.GET_USERS_RESPONSE,
        payload
    }
}

export const doAddRequest = (payload:any) => {
    return{
        type: ActionTypes.ADD_USER,
        payload
    }
}

export const doAddResponse = (payload:any) =>{
    return{
        type: ActionTypes.ADD_USER_RESPONSE,
        payload

    }
}

export const doUpdateRequest = (payload:any) => {
    return{
        type: ActionTypes.UPDATE_USER,
        payload
    }
}

export const doUpdateResponse = (payload:any) =>{
    return{

        type: ActionTypes.UPDATE_USER_RESPONSE,
        payload

    }
}

export const doDeleteResponse = (payload:any) =>{
    return{

        type: ActionTypes.DEL_USER_RESPONSE,
        payload

    }
}

export const doGetProductRequest = () => {
    return{

        type: ActionTypes.GET_PRODUCTS,
        // payload

    }
}

export const doGetProductResponse = (payload:any) => {
    return{

        type: ActionTypes.GET_PRODUCTS_RESPONSE,
        payload
    }
}

export const doAddProductRequest = (payload:any) => {
    return{
        type: ActionTypes.ADD_PRODUCT,
        payload
    }
}

export const doAddProductResponse = (payload:any) => {
    return{
        type: ActionTypes.ADD_PRODUCT_RESPONSE,
        payload
    }
}

export const doUpdateProductRequest = (payload:any) => {
    return{
        type: ActionTypes.UPDATE_PRODUCT,
        payload
    }
}

export const doUpdateProductResponse = (payload:any) => {
    return{
        type: ActionTypes.UPDATE_PRODUCT_RESPONSE,
        payload
    }
}

export const doLoginRequest = (payload:any) => {
    return{
        type: ActionTypes.LOGIN_REQUEST,
        payload
    }
}

export const doLoginResponse = (payload:any) => {
    return{
        type: ActionTypes.LOGIN_RESPONSE,
        payload
    }
}

export const doGetProductCategoryRequest = () =>{
    return{
        type: ActionTypes.GET_PRODUCTS_CATEGORY_REQUEST
    }
}

export const doGetProductCategoryResponse = (payload:any) =>{
    return{
        type: ActionTypes.GET_PRODUCTS_CATEGORY_RESPONSE,
        payload
    }
}
