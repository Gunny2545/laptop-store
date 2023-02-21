import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ProductService from "../../services/ProductService";
import swal from "sweetalert";

const EditMouse = () => {
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
        navigate("/mouse");
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
                    name="mousebrand"
                    id="mousebrand"
                    placeholder="Brand"
                    onChange={handleInputChange}
                    value={product.mousebrand}
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
                    name="mousemodel"
                    id="mousemodel"
                    placeholder="Model"
                    onChange={handleInputChange}
                    value={product.mousemodel}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Connection
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="wired_wireless"
                    id="wired_wireless"
                    placeholder="wired / wireless"
                    onChange={handleInputChange}
                    value={product.wired_wireless}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Sensor
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="sensor"
                    id="sensor"
                    placeholder="Sensor"
                    onChange={handleInputChange}
                    value={product.sensor}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-4 col-form-label">
                  Resolution
                </label>
                <div className="col-8">
                  <input
                    type="text"
                    className="form-control"
                    name="resolution"
                    id="resolution"
                    placeholder="Resolution"
                    onChange={handleInputChange}
                    value={product.resolution}
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
                    name="mouseprice"
                    id="mouseprice"
                    placeholder="Price"
                    onChange={handleInputChange}
                    value={product.mouseprice}
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
                    name="mouseunit_in_stock"
                    id="mouseunit_in_stock"
                    placeholder="Stock"
                    onChange={handleInputChange}
                    value={product.mouseunit_in_stock}
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

export default EditMouse;
