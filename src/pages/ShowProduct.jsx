import React, { useState, useEffect, Fragment } from "react";
import "../pages/pagecss/showproduct.css";
import Carousel from "react-elastic-carousel";
import ShowMouse from "./ShowMouse";
import { NavLink } from "react-router-dom";
import ProductService from "../services/ProductService";

const breakPoints = [{ width: 1200, itemsToShow: 3 }];

const ShowProduct = () => {
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
    <Fragment>
      <section>
        <hr />
        <h2 className="mt-3">𝗡𝗲𝘄 𝗟𝗮𝗽𝘁𝗼𝗽</h2>
        <div className="row mt-5">
          <Carousel
            breakPoints={{ ...breakPoints }}
            className="slider"
            enableAutoPlay={true}
            autoPlaySpeed={4000}
            infiniteLoop={true}
          >
            {products.map((product) => {
              if (product.type !== "laptop") {
                return null;
              }
              return (
                <div className="slider" key={product._id}>
                  <div className="product-thumb">
                    <NavLink to={`/product/${product._id}`}>
                      <img src={product.image} alt="" style={{ width: "400px", height: "400px" }}/>
                    </NavLink>
                  </div>
                  <div className="product-body">
                    <div className="title">
                      <h5>{product.brand}</h5>
                    </div>
                    <div className="bottom">
                      <h6>{product.model}</h6><hr />
                      <p>{product.processor} , {product.memory} , {product.storage}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <ShowMouse />
        </div>
      </section>
    </Fragment>
  );
};

export default ShowProduct;
