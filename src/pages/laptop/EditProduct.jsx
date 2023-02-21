import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductService from "../../services/ProductService";
import swal from "sweetalert";

const EditProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;
  let [product, setProduct] = useState({});

  useEffect(() => {
    fetchProduct();
  }, []);
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

  const saveProduct = (e) => {
    e.preventDefault();
    ProductService.update(id, product)
      .then((res) => {
        swal({
          icon: "success",
          text: "edit complete",
          title: "Result",
        });
        navigate("/product");
      })
      .catch((e) => {
        swal({
          icon: "error",
          text: "edit failed",
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
      <h2 className="mt-3">Edit product</h2>
      <hr />
      <div className="row">
        <div className="col-md-8 offset-md-2">
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
                    value={product.image}
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
                    value={product.brand}
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
                    value={product.model}
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
                    value={product.display}
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
                    value={product.processor}
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
                    value={product.graphics}
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
                    value={product.memory}
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
                    value={product.storage}
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
                    value={product.weight}
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
                    value={product.price}
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
                    value={product.unit_in_stock}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <div className="offset-sm-4 col-sm-8">
                  <button type="submit" className="btn btn-primary">
                    Save
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

export default EditProduct;
