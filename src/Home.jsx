
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';

import Axios from 'axios'


import Header from './Header';
import Category from './Category';
import Product from './Product';


function Home() {
    let [category, setCategory] = useState([]);
    let [product,setProduct] = useState([]);

    let categoryWiseProduct = (cat) =>{
        if(cat=='All'){
            productData();
        }
        else{
            Axios.get("https://fakestoreapi.com/products/category/"+cat)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    let categoryData = () =>{
        Axios.get("https://fakestoreapi.com/products/categories")
        .then((res)=>{
            console.log(res.data);
            setCategory(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    let productData = () =>{
        Axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        setTimeout(()=>{
            categoryData();
            productData();
        },1000);
    },setCategory)
  return (
    <>
        <Category cat={category} catWisePro={categoryWiseProduct}/>
        <Product pro={product}/>
    </>
  )
}

export default Home
