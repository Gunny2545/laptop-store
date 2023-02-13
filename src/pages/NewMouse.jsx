import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductService from '../services/ProductService'
import MainLayout from '../layouts/MainLayout'
import swal from 'sweetalert'

const NewMouse = () => {
    const navigate = useNavigate();
    let [product, setProduct] = useState({});

    const saveProduct =(e) => {
        e.preventDefault();
        ProductService.create(product)
            .then((res) => {
                swal({
                    icon: "success",
                    text: "insert complete",
                    title: "Result"
                });
                navigate("/product")
            })
            .catch((e) => {
                swal({
                    icon: "error",
                    text: "insert failed",
                    title: "Result"
                });
                console.log(e)
            });
    }

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
                        <label htmlFor="inputName" className="col-4 col-form-label">Brand</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="mousebrand" 
                        id="mousebrand" placeholder="Brand" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Model</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="mousemodel" 
                        id="mousemodel" placeholder="Model" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Wired / Wireless</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="wired_wireless" 
                        id="wired_wireless" placeholder="wired / wireless" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Sensor</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="sensor" 
                        id="sensor" placeholder="Sensor" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Resolution</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="resolution" 
                        id="resolution" placeholder="Resolution" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Price</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="mouseprice" 
                        id="mouseprice" placeholder="Price" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Stock</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="mouseunit_in_stock" 
                        id="mouseunit_in_stock" placeholder="Stock" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <div className="offset-sm-4 col-sm-8">
                        <button type="submit" className="btn btn-primary">Add</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default NewMouse