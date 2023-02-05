import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductService from '../services/ProductService'
import MainLayout from '../layouts/MainLayout'

const NewProduct = () => {
    const navigate = useNavigate();
    let [product, setProduct] = useState({});

    const saveProduct =(e) => {
        e.preventDefault();
        ProductService.create(product)
            .then((res) => {
                navigate("/product")
            })
            .catch((e) => {
                console.log(e)
            });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
      };

  return (
    <MainLayout>
        <h1 className="mt-3">Add a new product</h1>
        <hr />
        <div className="row">
            <div classname="col-md-8 offset-md-2">
                <div className="container">
                    <form onSubmit={saveProduct}>
                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Name</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="brand" 
                        id="brand" placeholder="Name" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Price</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="price" 
                        id="price" placeholder="Price" onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="inputName" className="col-4 col-form-label">Stock</label>
                        <div className="col-8">
                        <input type="text" className="form-control" 
                        name="unit_in_stock" 
                        id="unit_in_stock" placeholder="Stock" onChange={handleInputChange}/>
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

export default NewProduct