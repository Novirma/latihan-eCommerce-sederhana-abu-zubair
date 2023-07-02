import { takeEvery, all } from "redux-saga/effects";
import ActionTypes from "../action/actionType";
// import { handleGetAllUser} from './userSaga'
import { handleAddProduct, handleAddUser, handleDelUser, handleGetAllProduct, handleGetAllProductCategory, handleGetAllUser, handleLogin, handleUpdateProduct, handleUpdateUser } from "./userSaga";


function* watchAll(){
    yield all([
        takeEvery(ActionTypes.REQ_GET_USERS,handleGetAllUser),
        takeEvery(ActionTypes.ADD_USER,handleAddUser),
        takeEvery(ActionTypes.UPDATE_USER,handleUpdateUser),
        takeEvery(ActionTypes.DEL_USER,handleDelUser),

        takeEvery(ActionTypes.GET_PRODUCTS,handleGetAllProduct),
        takeEvery(ActionTypes.ADD_PRODUCT,handleAddProduct),
        takeEvery(ActionTypes.UPDATE_PRODUCT,handleUpdateProduct),

        takeEvery(ActionTypes.LOGIN_REQUEST,handleLogin),

        takeEvery(ActionTypes.GET_PRODUCTS_CATEGORY_REQUEST,handleGetAllProductCategory)
    ])
}

export default watchAll;