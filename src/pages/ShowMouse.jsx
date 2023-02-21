import React, { useState, useEffect, Fragment } from "react";
import "../pages/pagecss/showproduct.css";
import Carousel from "react-elastic-carousel";
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
        <h2 className="mt-3">𝗡𝗲𝘄 𝗠𝗼𝘂𝘀𝗲</h2>
        <div className="row mt-5">
          <Carousel
            breakPoints={{ ...breakPoints }}
            className="slider"
            enableAutoPlay={true}
            autoPlaySpeed={4000}
            infiniteLoop={true}
          >
            {products.map((product) => {
              if (product.type !== "mouse") {
                return null;
              }
              return (
                <div className="slider" key={product._id}>
                  <div className="product-thumb">
                    <NavLink to={`/mouse/${product._id}`}>
                      <img src={product.image} alt="" style={{ width: "300px", height: "300px" }}/>
                    </NavLink>
                  </div>
                  <div className="product-body">
                    <div className="title">
                      <h5>{product.mousebrand}</h5>
                    </div>
                    <div className="bottom">
                      <h6>{product.mousemodel}</h6><hr />
                      <p>{product.wired_wireless} , {product.sensor} , {product.resolution}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </section>
    </Fragment>
  );
};

export default ShowProduct;
