import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductService from "../../services/ProductService";

const ProductDetail = () => {
  let params = useParams();
  let [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);

  let id = params.id;
  let [review, setReview] = useState({});

  const saveReview = (e) => {
    e.preventDefault();
    console.log(review);
    ProductService.addReview(id, review)
      .then((res) => {
        fetchProduct();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReview({ ...review, [name]: value });
  };

  const fetchProduct = () => {
    ProductService.get(params.id)
      .then((res) => {
        setProduct(res.data.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <MainLayout>
      <h2 className="mt-3">{product.brand}</h2>
      <div className="row mt-3">
        <div className="col-md-4">
        <img src={product.image} alt="" style={{ width: "400px", height: "400px" }}/>
        </div>
        <div className="col-md-8 border p-4">
          <p>
            <label htmlFor="" className="lblStyle">
              Brand :{" "}
            </label>{" "}
            {product.brand}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Meodel :{" "}
            </label>{" "}
            {product.model}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Display :{" "}
            </label>{" "}
            {product.display}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Processor :{" "}
            </label>{" "}
            {product.processor}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Graphics :{" "}
            </label>{" "}
            {product.graphics}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Memory :{" "}
            </label>{" "}
            {product.memory}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Storage :{" "}
            </label>{" "}
            {product.storage}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Weight :{" "}
            </label>{" "}
            {product.weight}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Price :{" "}
            </label>{" "}
            ฿ {product.price}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              In Stock :{" "}
            </label>{" "}
            {product.unit_in_stock}
          </p>
          <p>
            <label htmlFor="" className="lblStyle">
              Description:{" "}
            </label>{" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            expedita doloremque aliquid a hic est necessitatibus iusto mollitia,
            quasi quod modi quas ipsum repudiandae porro sint tempore totam nam
            blanditiis vel aut placeat similique, consectetur illum. Eius
            temporibus nam vero fuga illo officia reprehenderit eveniet, itaque
            enim expedita pariatur. Nulla?
          </p>
          <p className="text-center">
            <button className="btn btn-primary">Add to Cart</button>
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <h3>Reviews of This Product</h3>
        <hr />
        <div className="col">
          <div class="container">
            <form onSubmit={saveReview}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-2 col-form-label">
                  Add your review
                </label>
                <div className="col-2">
                  <select
                    class="form-select"
                    name="star"
                    id="star"
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">-Select-</option>
                    {[5, 4, 3, 2, 1].map((s) => (
                      <option value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {product.reviews &&
          product.reviews.map((r) => (
            <div className="alert alert-info">
              <p>Star : {"⭐".repeat(r.star)}</p>
              <p>{r.comment}</p>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default ProductDetail;
