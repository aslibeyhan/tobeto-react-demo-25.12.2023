import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard/ProductCard';


export default function
  () {
     const [products, setProducts] = useState([]);
     useEffect(() => {
       axiosGet();
     }, [])
     
    const axiosGet=async()=>{
      let response=await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
      console.log(response.data.products);
    } 

  return (
    // <div classNameName='row'>
    //     <div classNameName="col-6 bg-success">1</div>
    //     <div classNameName="col-4 bg-danger">2</div>
    //     <div classNameName="col-2 bg-primary">3</div>
    //     <div classNameName="col-4 bg-secondary">4</div>
    //     <div classNameName="col-4 bg-warning">5</div>
    //     <div classNameName="col-4 bg-info">6</div>
    // </div>

    <div className='container mt-0 mt-md-5'>
    <div className='row'>
      {products.map(product=>(
      <div className='col-12 col-md-6 col-lg-4 col-xl-3  mb-3'>
      <ProductCard product={product}/>
      </div>
      ))};
    </div>
    </div>
  );
}
