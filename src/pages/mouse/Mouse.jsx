import React, { useState, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProductService from "../../services/ProductService";
import { NavLink } from "react-router-dom";

const Mouse = () => {
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
      <h2 className="mt-3">π πΌπππ²</h2>
      <hr />
      <div className="row">
        <div className="col d-flex justify-content-end">
          <NavLink to="/mouse/new" className="btn btn-success">
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

const ProductList = (props) => {
  if (props.product.type !== "mouse") {
    return null;
  }
  console.log(props);
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <img
            src={props.product.image}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
          <div className="card-text">
            <h5>{props.product.mousebrand}</h5>
            <h6>{props.product.mousemodel}</h6>
            <hr />
            <p>
              {props.product.wired_wireless} , {props.product.sensor} ,{" "}
              {props.product.resolution}
            </p>
            <h5>ΰΈΏ {props.product.mouseprice}</h5>
            <h6>in stock : {props.product.mouseunit_in_stock}</h6>
            <NavLink
              to={"/mouse/" + props.product._id}
              className="btn btn-secondary"
            >
              Learn More
            </NavLink>{" "}
            <NavLink
              to={"/mouse/" + props.product._id}
              className="btn btn-secondary"
            >
              Buy Now
            </NavLink>{" "}
            <NavLink
              to={"/mouse/edit/" + props.product._id}
              className="btn btn-warning"
            >
              Edit
            </NavLink>{" "}
            <hr />
            <NavLink
              to={"/mouse/delete/" + props.product._id}
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

export default Mouse;
