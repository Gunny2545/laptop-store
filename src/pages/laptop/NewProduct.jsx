import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/ProductService";
import MainLayout from "../../layouts/MainLayout";
import swal from "sweetalert";

const NewProduct = () => {
  const navigate = useNavigate();
  let [product, setProduct] = useState({});

  const saveProduct = (e) => {
    e.preventDefault();
    ProductService.create(product)
      .then((res) => {
        swal({
          icon: "success",
          text: "insert complete",
          title: "Result",
        });
        navigate("/product");
      })
      .catch((e) => {
        swal({
          icon: "error",
          text: "insert failed",
          title: "Result",
        });
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <MainLayout>
      <h2 className="mt-3">Add a new product</h2>
      <hr />
      <div className="row">
        <div classname="col-md-8 offset-md-2">
          <div className="container">
            <form onSubmit={saveProduct}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Picture
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="image"
                    id="image"
                    placeholder="picture url"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Product type
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="type"
                    id="type"
                    placeholder="laptop / mouse"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Brand
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="brand"
                    id="brand"
                    placeholder="Brand"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Model
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="model"
                    id="model"
                    placeholder="Model"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Display
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="display"
                    id="display"
                    placeholder="Display"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Processor
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="processor"
                    id="processor"
                    placeholder="Processor"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Graphics
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="graphics"
                    id="graphics"
                    placeholder="Graphics"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Memory
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="memory"
                    id="memory"
                    placeholder="Memory"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Storage
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="storage"
                    id="storage"
                    placeholder="Storage"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Weight
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="weight"
                    id="weight"
                    placeholder="Weight"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Price
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Price"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Stock
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="unit_in_stock"
                    id="unit_in_stock"
                    placeholder="Stock"
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default NewProduct;
