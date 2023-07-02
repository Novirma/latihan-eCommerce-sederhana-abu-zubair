import { configureStore} from "@reduxjs/toolkit";
import userReducers from "../reducer/userReducer"
import { combineReducers } from "@reduxjs/toolkit";
import productReducers from "../reducer/productReducer";
import rootSaga from '../saga';
import createSagaMiddleware from "@redux-saga/core"
import  {createLogger}  from "redux-logger";
import loginReducers from "../reducer/loginReducer";
import productCategoryReducers from "../reducer/categoryProductReducer"

const logger = createLogger()
const saga = createSagaMiddleware()
const reducer = combineReducers({
    userReducers,
    productReducer:productReducers,
    loginReducers,
    productCategoryReducers
})

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:false
    }).concat(logger).concat(saga)
})

saga.run(rootSaga);

export default store