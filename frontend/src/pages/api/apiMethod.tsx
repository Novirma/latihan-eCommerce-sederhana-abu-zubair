import axios from "../config/endpoint"

const findAll=()=>{
    return axios.get("/dto-user/users-customers-views")
}

const create=(data:any)=>{
    // console.log(data)
    return axios.post("/dto-user",data)
}

const GetById=(id:any)=>{
    return axios.get(`/dto-user/${id}`)
}

const updateUserCustomerById=(dataBody:any)=>{
    return axios.patch(`/dto-user/updateUser/${dataBody.id}`,dataBody)
}

const deleteUserById=(id:any)=>{
    return axios.delete(`/dto-user/${id}`)
}

//Product Controller

const getAllProduct=()=>{
    return axios.get("/dto-product")
}

const insertProduct = (data:any) =>{
    return axios.post("/dto-product/create",data,{headers:{
        "Content-Type":"multipart/form-data"
    }})
}

const getProductById = (id:any)=>{
    return axios.get(`/dto-product/${id}`)
}

const updateProduct = (data:any) =>{
    return axios.patch(`/dto-product/${data.id}`,data,{
        headers:{
        "content-type":"multipart/form-data"
    }})
}

const deleteProduct = (id:any) => {
    return axios.delete(`/dto-product/${id}`)
}

const loginUser = (data:any) :any => {
    return axios.post('/dto-auth/login',data)
}

const findAllProductCategory =()=>{
    return axios.get("dto-productcategory")
}

export default{
    findAll,
    create,
    GetById,
    updateUserCustomerById,
    deleteUserById,
    getAllProduct,
    insertProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    loginUser,
    findAllProductCategory
}