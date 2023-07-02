import { call,put } from "redux-saga/effects";
// import apiMethod from "../component/api/apiMethod";
import apiMethod from "@/pages/api/apiMethod";
import { doGetUserResponse, doAddResponse, doUpdateResponse, doDeleteResponse, doGetProductResponse, doAddProductResponse, doLoginResponse, doGetProductCategoryResponse, doUpdateProductResponse } from "../action/actionReducer";


function* handleGetAllUser():any{

    // console.log("first")
    try {
        const result = yield call(apiMethod.findAll);
        yield put(doGetUserResponse(result.data[0]))
    } catch (error) {
        yield put(doGetUserResponse({message:error,status:400}))
    }
}

function* handleAddUser(action:any):any{
    try {
        // console.log(action)
        const result = yield call(apiMethod.create,action.payload)
        yield put(doAddResponse(result.data))
    } catch (error) {
        yield put(doAddResponse({message:error,status:400}))
    }
}

function* handleUpdateUser(action:any):any{
    try {
        const result = yield call(apiMethod.updateUserCustomerById,action.payload)
        console.log("TESTUPDATED",result);
        
        yield put(doUpdateResponse(result.data))
    } catch (error) {
        yield put(doUpdateResponse({message:error,status:400}))
    }
}

function* handleDelUser(action:any):any{
    try {
        const result = yield call(apiMethod.deleteUserById,action.payload)

        yield put(doDeleteResponse(result.data))
    } catch (error) {
        yield put(doDeleteResponse({message:error,status:400}))
    }
}

function* handleGetAllProduct():any{
    try {
        const result = yield call(apiMethod.getAllProduct);
        console.log('saga', result)
        yield put(doGetProductResponse(result.data))
    } catch (error) {
        yield put(doGetProductResponse({message:error,status:400}))
    }
}

function* handleAddProduct(action:any):any{
    try {
        const result = yield call(apiMethod.insertProduct,action.payload)
        yield put(doAddProductResponse(result.data[0]))
    } catch (error) {
        yield put(doAddProductResponse({message:error,status:400}))
    }
}

function* handleUpdateProduct(action:any):any{
    try{
        const result = yield call(apiMethod.updateProduct,action.payload)
        yield put(doUpdateProductResponse(result.data))
    } catch (error) {
        yield put(doUpdateProductResponse({message:error,status:400}))
    }
}

function* handleLogin(action:any):any{
    try {
        const result = yield call(apiMethod.loginUser,action.payload)
        // console.log(result.data.result)

        if(result.data.result)
            localStorage.setItem('TokenNext',result.data.result)
            const expirationTime = new Date().getTime() + (3600 * 1000); 
        
            localStorage.setItem("TokenExpiration", expirationTime.toString());
            yield put(doLoginResponse({token:result.data.result,status:result.data.status, message:result.data.message}))

    } catch (error) {
        
    }
}

function* handleGetAllProductCategory():any{
    try {
        const result = yield call(apiMethod.findAllProductCategory);
        // console.log(result.data)
        yield put(doGetProductCategoryResponse(result.data))
    } catch (error) {
        yield put(doGetProductCategoryResponse({message:error,status:400}))
    }
}

export{
    handleGetAllUser,
    handleAddUser,
    handleUpdateUser,
    handleDelUser,
    handleGetAllProduct,
    handleAddProduct,
    handleUpdateProduct,
    handleLogin,
    handleGetAllProductCategory

}