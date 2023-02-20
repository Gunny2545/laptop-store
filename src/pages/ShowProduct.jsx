import React, { useState, useEffect ,Fragment } from "react";
import "../pages/pagecss/showproduct.css";
import Carousel from "react-elastic-carousel";
import ShowMouse from "./ShowMouse";
import { NavLink } from "react-router-dom";
import ProductService from "../services/ProductService";

const breakPoints = [{ with: 1200, itemsToShow: 3 }];
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
    <>
      <Fragment>
        <section>
          <h2 className="mt-3">𝗡𝗲𝘄 𝗟𝗮𝗽𝘁𝗼𝗽</h2>
          <hr />
          <div className="row">
            <Carousel
              breakPoints={breakPoints}
              className="slider"
              enableAutoPlay={true}
              autoPlaySpeed={2000}
              infiniteLoop={true}
            >
              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f089c1c2fb6bc8789cc8">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0149146/A0149146_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>ASUS</h6>
                  </div>
                  <div className="price">
                    <span>ROG Strix Scar 18</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f1dcc1c2fb6bc8789d01">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0146394/A0146394_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>ASUS</h6>
                  </div>
                  <div className="price">
                    <span>TUF Gaming F17</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f2bcc1c2fb6bc8789d11">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0146685/A0146685_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>DELL</h6>
                  </div>
                  <div className="price">
                    <span>G15R-W566311600ATH</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f304c1c2fb6bc8789d15">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0146686/A0146686_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>DELL</h6>
                  </div>
                  <div className="price">
                    <span>G15-W566312600M2CTH</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f3cec1c2fb6bc8789d1f">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0144692/A0144692_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Lenovo</h6>
                  </div>
                  <div className="price">
                    <span>IdeaPad Gaming 3 15IAH7</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f45cc1c2fb6bc8789d25">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0147410/A0147410_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>Lenovo</h6>
                  </div>
                  <div className="price">
                    <span>Legion 5 15IAH7H</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f4fac1c2fb6bc8789d2d">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0149151/A0149151_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>MSI</h6>
                  </div>
                  <div className="price">
                    <span>Titan GT77HX 13VI-001TH</span>
                  </div>
                </div>
              </div>

              <div className="product">
                <div className="product-thumb">
                  <a href="http://localhost:3000/product/63f0f562c1c2fb6bc8789d33">
                    <img
                      src="https://img.advice.co.th/images_nas/pic_product4/A0149153/A0149153_2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="product-body">
                  <div className="title">
                    <hr />
                    <h6>MSI</h6>
                  </div>
                  <div className="price">
                    <span>Raider GE78HX 13VH-043TH</span>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <ShowMouse/>
        </section>
      </Fragment>
    </>
  );
};

export default ShowProduct;
