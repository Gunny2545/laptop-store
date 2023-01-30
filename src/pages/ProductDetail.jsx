import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';
import ProductService from '../services/ProductService';
import { NavLink } from 'react-router-dom';
import logo from "../logo.svg";

const ProductDetail = () => {
    let params = useParams();
    let [product, setProduct] = useState({});

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct = () => {
        ProductService.get(params.id)
          .then((res) => {
            setProduct(res.data.data);
            console.log(res);
          })
          .catch((e) => {
            console.log(e);
          });
      }
  return (
    <MainLayout>
        <h1 className="mt-3">{product.brand}</h1>
        <div className="row mt-3">
        <div className="col-md-4">
          <img src={logo} alt="" />
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">Brand : </label> {product.brand}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Display : </label> {product.display}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Processor : </label> {product.processor}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Graphics : </label> {product.graphics}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Memory : </label> {product.memory}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Storage : </label> {product.storage}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Weight : </label> {product.weight}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Price : </label> ฿ {product.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">In Stock : </label> {product.unit_in_stock}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">Description: </label> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, expedita doloremque aliquid a hic est necessitatibus iusto mollitia, quasi quod modi quas ipsum repudiandae porro sint tempore totam nam blanditiis vel aut placeat similique, consectetur illum. Eius temporibus nam vero fuga illo officia reprehenderit eveniet, itaque enim expedita pariatur. Nulla?
          </p>
          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <h2>Reviews of This Product</h2>
        <hr />
        { product.reviews && 
          product.reviews.map((r)=>(
            <div className="alert alert-info">
              <p>Star : {"⭐".repeat(r.star)}</p>
              <p>{r.comment}</p>
            </div>
          ))
        }
      </div>
    </MainLayout>
  )
}

export default ProductDetail