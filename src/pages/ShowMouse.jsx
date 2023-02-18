import React, { Fragment } from "react";
import "../pages/pagecss/showproduct.css";
import Carousel from "react-elastic-carousel";

const breakPoints = [{ with: 1200, itemsToShow: 3 }];

const ShowMouse = () => {
    return (
        <>
          <Fragment>
            <section>
              <h2 className="mt-3">𝗡𝗲𝘄 𝗠𝗼𝘂𝘀𝗲</h2>
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
                      <a href="http://localhost:3000/mouse/63ecd8439629e94426dab32e">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0144862/A0144862OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>COOLER MASTER</h6>
                      </div>
                      <div className="price">
                        <span>MM310</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63ee245f559a54febbf7ee18">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0147313/A0147313OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>LOGA</h6>
                      </div>
                      <div className="price">
                        <span>GARUDA PRO</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f0974cc2250a2080a9bd31">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0140451/A0140451OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>CORSAIR</h6>
                      </div>
                      <div className="price">
                        <span>SABRE PRO RGB WIRELESS</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f09804c2250a2080a9bd3f">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0140809/A0140809OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>Logitech</h6>
                      </div>
                      <div className="price">
                        <span>G15-W566312600M2CTH</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f098e3c2250a2080a9bd4f">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0133940/A0133940OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>RAZER</h6>
                      </div>
                      <div className="price">
                        <span>DEATHADDER V2 PRO</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f099acc2250a2080a9bd5f">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0143242/A0143242OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>Steelseries</h6>
                      </div>
                      <div className="price">
                        <span>AEROX 3 WIRELESS</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f09a5cc2250a2080a9bd8e">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0144625/A0144625OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>THERMALTAKE</h6>
                      </div>
                      <div className="price">
                        <span>ARGENT M5 GAMING</span>
                      </div>
                    </div>
                  </div>
    
                  <div className="product">
                    <div className="product-thumb">
                      <a href="http://localhost:3000/mouse/63f09b04c2250a2080a9bda8">
                        <img
                          src="https://img.advice.co.th/images_nas/pic_product4/A0132953/A0132953OK_BIG_1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="product-body">
                      <div className="title">
                        <hr />
                        <h6>ACER</h6>
                      </div>
                      <div className="price">
                        <span>CESTUS 350 (PMR910)</span>
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

export default ShowMouse