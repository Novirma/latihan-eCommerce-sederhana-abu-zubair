import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { createProduct, updateProduct } from "../redux/action/actionReducer";
import { useLocation, useNavigate } from "react-router-dom";
import  Link  from 'next/link';
import { useRouter } from 'next/router';



const EditProduct = (props:any) => {

  type FormValue = {
    id : number;
    name: string;
    description: string;
    category_id: number;
    price: number;
    gambar?: string; 
  }

    const dispatch = useDispatch()
    const router = useRouter()
    // const [productById, setProductById] = useState(location.state?.products)
    const { register, handleSubmit, formState: {errors}} = useForm<FormValue>();

    const { id, description, category_id, price, gambar}:any = router.query

    const handleRegistration = async(data:any) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category_id", data.category_id);
        formData.append("price", data.price);
        formData.append("gambar", data.gambar[0]);
        // formData.append("id",productById.id)

        // const idProduct = productById.id
        // dispatch(updateProduct(formData,idProduct));
        // await axios.patch(`/dto-product/${productById.id}`,formData,{
        //     headers:{
        //     "content-type":"multipart/form-data"
        // }})
        // console.log(Array.from(formData.entries()));
        // const status = result.data.status;
        // const statustext = result.data.message;
        // const namaProd = result.data.result.name
        // console.log(status);
        // console.log(statustext)

        // dispatch(createProduct(data))
        router.push("/product")
        // // setPesan(result.data.message)
        // console.log(...formData);
    }
// console.log(productById)
    const registerOptions = {
        name: { required: "Name is required"},
        description: { required: "Description is required"},
        category_id: { required: "Category is required"},
        price: { required: "Price is required"},
        gambar: { required: "Gambar is required"}
        
    }
    function
    return(
        <div>
          <form onSubmit={handleSubmit(handleRegistration)}>
                      <div className="max-w-xl bg-white py-6 px-3 m-auto">
                        <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span
                                className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
                              text-sm font-medium text-slate-700"
                              >
                                Name
                              </span>
                              <input
                            //   defaultValue={productById.name}
                                type="text"
                                // name="name"
                                {...register(
                                  "name",
                                  registerOptions.name
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                                 placeholder-slate-400 focus:outline-none focus:border-sky-500
                                  focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Name"
                              />
                            </label>
                            {errors?.name && errors.name.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span
                                className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
                              text-sm font-medium text-slate-700"
                              >
                                Description
                              </span>
                              <input
                                // defaultValue={productById.description}
                                type="text"
                                // name="description"
                                {...register(
                                  "description",
                                  registerOptions.description
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                                 placeholder-slate-400 focus:outline-none focus:border-sky-500
                                  focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Description"
                              />
                            </label>
                            {errors?.description && errors.description.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span
                                className="after:content-['*'] after:ml-0.5 after:text-red-500 block 
                              text-sm font-medium text-slate-700"
                              >
                                Category
                              </span>
                              <input
                                // defaultValue={productById.category_id}
                                type="number"
                                // name="category_id"
                                {...register(
                                  "category_id",
                                  registerOptions.category_id
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                                 placeholder-slate-400 focus:outline-none focus:border-sky-500
                                  focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Category"
                              />
                            </label>
                            {errors?.category_id && errors.category_id.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Price
                              </span>
                              <input
                                // defaultValue={productById.price}
                                type="number"
                                // name="price"
                                {...register(
                                  "price",
                                  registerOptions.price
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Price"
                              />
                            </label>
                            {errors?.price && errors.price.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Gambar
                              </span>
                              <input
                                type="file"
                                // name="gambar"
                                {...register(
                                  "gambar",
                                  registerOptions.gambar
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Gambar"
                              />
                            </label>
                            {errors?.gambar && errors.gambar.message}
                          </div>


                        </div>
                      </div>
                      <div className="flex-row space-x-4 mt-4 text rigt">
                        <button
                          className="inline-flex justify-center rounded-md border border-transparent
                        bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 
                         focus:outline-none focus-visible:ring-2  focus-visible:ring-blue-500 
                         focus-visible:ring-offset-2"
                        >
                          Submit
                        </button>

                        <Link
                        href = {"/product"}
                          className="inline-flex justify-center rounded-md border border-transparent
                        bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-blue-200 
                        focus:outline-none focus-visible:ring-2  focus-visible:ring-blue-500 
                        focus-visible:ring-offset-2"
                          
                        >
                          Cancel
                        </Link>
                      </div>
                    </form>
        </div>
    )

}

export default EditProduct