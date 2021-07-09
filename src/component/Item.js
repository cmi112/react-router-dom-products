import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react"

export default function Item({match}) {
  const [id,setId]=useState()
  const [prod,setProd]=useState({})
  console.log(match.params);
  useEffect(() => {
    axios({
      method:"get",
      url:`https://fakestoreapi.com/products/${match.params.id}`
    }).then(res=>{
      console.log(res.data);
      setProd(res.data)

    })
   
  }, [])

  return (
    <div>
      <h1>Item Details</h1>
      <h3>{prod.title}</h3>
      <p>${prod.price}</p>
      <p>{prod.category}</p>
      <p>{prod.description}</p>
      <img src={prod.image} alt="" style={{width:"50%"}}/>
    </div>
  )
}
