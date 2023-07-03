import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
    const [pdata,setPdata]=useState([])

    const fetchApi=async()=>{
        const result=await axios.get("https://fakestoreapi.com/products")
        setPdata(result.data)
    }
    useEffect(()=>{
        fetchApi()
    },[])
    // console.log(pdata)
    return (
        <div>
            {pdata.map((item)=>{
                // console.log(item)
                return(
                    <div>
                        <h1>{item.title}</h1>
                        <img src={item.image} alt="" />
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default Products;