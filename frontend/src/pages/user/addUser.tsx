import React,{Fragment} from "react";
import {Transition, Dialog} from "@headlessui/react"
import { useForm } from 'react-hook-form'
import apiMethod from "../api/apiMethod";
import { useDispatch } from "react-redux";
import { createUserCustomer, doAddRequest, doAddResponse } from "../redux/action/actionReducer";
import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
import Link from "next/link";
import { useRouter } from 'next/router';

const AddUser = (props:any) => {
    type FormValues = {
        username: string;
        password: string;
        firstname: string;
        lastname: string;
    }

    const dispatch = useDispatch()
    const router = useRouter()
    const { register, handleSubmit, formState: {errors}} = useForm<FormValues>();

    const handleRegistration = (data:any) => {
        dispatch(doAddRequest(data))
        router.push('/user')
        // navigate("/user")
        // setPesan(result.data.message)
        // console.log(data);
    }

    const registerOptions = {
        username: { required: "Name is required" },
        email: { required: "Email is required" },
        password: {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must have at least 8 characters"
          }
        },
            firstname: { required: "Firstname is required" },
            lastname: { required: "Lastname is required" },
      };
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
                                Username
                              </span>
                              <input
                                type="text"
                                {...register(
                                  "username",
                                  registerOptions.username
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300
                                 placeholder-slate-400 focus:outline-none focus:border-sky-500
                                  focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Username"
                              />
                            </label>
                            {errors?.username && errors.username.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Password
                              </span>
                              <input
                                type="password"
                                
                                {...register(
                                  "password",
                                  registerOptions.password
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Password"
                              />
                            </label>
                            {errors?.password && errors.password.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                First Name
                              </span>
                              <input
                                type="text"
                                
                                {...register(
                                  "firstname",
                                  registerOptions.firstname
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="First Name"
                              />
                            </label>
                            {errors?.firstname && errors.firstname.message}
                          </div>

                          <div className="col-span-1 space-x-4">
                            <label className="block">
                              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Last Name
                              </span>
                              <input
                                type="text"
                               
                                {...register(
                                  "lastname",
                                  registerOptions.lastname
                                )}
                                className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                                placeholder="Last Name"
                              />
                            </label>
                            {errors?.lastname && errors.lastname.message}
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
                        href={"/user"}
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


export default AddUser