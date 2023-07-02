import React, { useEffect, useState, Fragment } from 'react';
import Content from '../shared/content';
import { Menu, Transition } from "@headlessui/react";
import { BsThreeDotsVertical, BsPencil, BsPencilFill, BsTrash, BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { doGetProductCategoryRequest, doRequestGetUser, getAll } from '../redux/action/actionReducer';
import Link from 'next/link'
import { useRouter } from 'next/router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Category = () => {
    let {products_category, message, refresh } = useSelector((state:any)=>state.productCategoryReducers)
    console.log("test category mas bro!!",products_category)
    const dispatch = useDispatch()
    const router = useRouter()
    // const[user,setUser] = useState('')
    const[userById,setUserById] = useState('')
    const[isOpen,setIsOpen] = useState(false)
    const[isEdit,setIsEdit] = useState(false)
    const[isHapus,setIsHapus] = useState(false)
    const[whatToDelete,setWhatToDelete] = useState('')

    const columns = [
        {name: '#No'},
        {name : 'name'},
        {name: 'description'},
        {name: 'Aksi'},
    ]


    // const GetById=async(id)=>{
    //     const result = await apiMethod.GetById(id)
    //     // console.log(result);
    //     setUserById(result.data[0])
    //     setIsEdit(true)
    // }

    // const goToEdit = (item:any) => {
    //   navigate(`/edit-user/${item.id}`, {
    //     state: {
    //       users: item,
    //     },
    //   });
    // };

    // const DeleteById=async(dataBody)=>{
    //   setWhatToDelete(dataBody)
    //   setIsHapus(true)
    // }

    useEffect(()=>{
        // dispatch(getAll())
        dispatch(doGetProductCategoryRequest())

        // if (message) {
        //   setTimeout(()=>{
        //     if(status === 400){
        //       toast.error(message)
        //     }else{
        //       toast.success(message)
        //     }
        //   },30)
        // }
    },[refresh, isOpen])
    // console.log(user);
    return (
        <div>
        <Content title="users" isOpen={()=>{setIsOpen(true)}}>
          <table className="min-w-full table-fixed">
            <thead>
              <tr className="border-t border-gray-200">
                {
                (columns || []).map((col) => 
                  <th
                    className="pr-6 py-2 text-left border-b border-gray-200 bg-green-200 
                    text-xs font-medium text-gray-500 uppercase tracking-winder"
                  >
                    <span className="">{col.name}</span>
                  </th>
                )
                }
              </tr>
            </thead>
            <tbody className="bg-white divide-y-8 divide-gray-100">
              {
                  (products_category || []).map((dt:any,index:any) =>
                  <tr key={dt.id}>
                      <td className="py-3 text-gray-900">{index+1}</td>
                      <td className="py-3 text-gray-900">{dt.name}</td>
                      <td className="py-3 text-gray-900">{dt.description}</td>
                      {/* <td className="py-3 text-gray-900">{dt.lastname}</td> */}
                      <td className="py-3 text-gray-900">
  
                      <div className="w-full">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-red-500 
            bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 
            focus:outline-none focus-visible:ring-2 focus-visible:ring-white 
            focus-visible:ring-opacity-75">
              <BsThreeDotsVertical
                className="h-5 w-5 text-black hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <Link
                    href={`user/editUser`}
                    //  onClick={()=>goToEdit(dt)}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsPencilFill
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsPencil
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Edit
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button 
                    // onClick={()=>{setIsHapus(dt)}}
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <BsTrashFill
                          className="mr-2 h-5 w-5 text-violet-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsTrash
                          className="mr-2 h-5 w-5 text-violet-400"
                          aria-hidden="true"
                        />
                      )}
                      Delete
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
                      </td>
                  </tr>
                  )
              }
            </tbody>
          </table>
        </Content>
{/*         
        {
          isOpen ? (
          <AddUser show={isOpen} closeModal={() => setIsOpen(false)} />
        ) : (
          ''
        )
        }
        {/* Ternari Operator */}
        {/* {
            isEdit ? (
                <EditUser show={isEdit} userById={userById} closeModal={() => setIsEdit(false)} />
              ) : ('')
        }
        {
            isHapus ? (
              <ConfirmDelete show={isHapus} table="User" name={whatToDelete.username} id={whatToDelete.id} closeModal={() => setIsHapus(false)}  />
            ) : ('')
        }  */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>

        </div>
    );
  };
     
 
export default Category;