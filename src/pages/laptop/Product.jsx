import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProductService from "../../services/ProductService";
import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    ProductService.getAll()
      .then((res) => {
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <MainLayout>
      <h2 className="mt-3">𝗟𝗮𝗽𝘁𝗼𝗽</h2>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/product/new" className="btn btn-success">
            Add a Product
          </NavLink>
        </div>
      </div>
      <div className="row mt-2 row-cols-lg-4 row-cols-3 g-2">
        {products.map((p) => (
          <ProductList key={p._id} product={p} />
        ))}
      </div>
    </MainLayout>
  );
};

const ProductList = (props) => {if (props.product.type !== 'laptop') {
  return null;
}
  console.log(props);
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <img src={logo} alt="" />
          <div className="card-text">
            <h5>{props.product.brand}</h5>
            <h6>{props.product.model}</h6>
            <hr />
            <p>
              {props.product.processor} , {props.product.memory} ,{" "}
              {props.product.storage}
            </p>
            <h5>฿ {props.product.price}</h5>
            <h6>in stock : {props.product.unit_in_stock}</h6>
            <NavLink
              to={"/product/" + props.product._id}
              className="btn btn-secondary"
            >
              Learn More
            </NavLink>{" "}
            <NavLink
              to={"/product/" + props.product._id}
              className="btn btn-secondary"
            >
              Buy Now
            </NavLink>{" "}
            <NavLink
              to={"/product/edit/" + props.product._id}
              className="btn btn-warning"
            >
              Edit
            </NavLink>{" "}
            <hr />
            <NavLink
              to={"/product/delete/" + props.product._id}
              className="btn btn-danger"
            >
              Delete
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
