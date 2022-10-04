import React, { useEffect, useState } from 'react'
import {axiosInstance} from '../server/apiConfig'
import {headerRouts} from './Text'
 const ContentUser = () => {
  const [dataProducts,setDataProducts] = useState()
  const getDataFromApi = ()=>{
 
  axiosInstance.get("/products").then((res)=>{
    setDataProducts(res.data.products.map(item=><td className='list-item'>{item.title}</td>))
    }).catch(error=>console.log(error))
  }
  useEffect(()=>{
    getDataFromApi()
  },[])
  return (
    <>
   <div className='header-item'>
   <h2>{headerRouts}</h2>
   </div>
    <table >
    <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
      <tr>{dataProducts}</tr>  
    </table>
    </>
  )
}
export default ContentUser
