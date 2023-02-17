import React, { Fragment } from "react";
import "../pages/pagecss/showproduct.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ with: 1200, itemsToShow: 4 }];

const NewProduct = () => {
  return (
    <>
      <Fragment>
        <section>
          <h2 className="mt-3">New Product</h2>
          <hr />
          <div className="row">
            <Carousel breakPoints={breakPoints} className="slider">
              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="">
                    <img
                      src="https://i.pinimg.com/564x/52/05/e4/5205e44a326c509a7e20b1baefbc7aed.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Rolex Watch</h6>
                  </div>
                  <div className="price">
                    <span>19$</span>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </Fragment>
    </>
  );
};

export default NewProduct;
