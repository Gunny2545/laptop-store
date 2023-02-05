import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import ProductService from '../services/ProductService'
import swal from 'sweetalert'

const DeleteProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const deleteProduct = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        ProductService.deleteProduct(id)
          .then((res) => {
            swal("The product has been deleted!", {
              icon: "success",
            });
            navigate("/product");
          })
          .catch((e) => {
            console.log(e);
            swal("Delete failed!", {
              icon: "error",
            });
          });
      } else {
        swal("The product is safe!");
      }
    });
  };

  return (
    <MainLayout>
        <button onClick={deleteProduct}>Delete</button>
    </MainLayout>
  );
};

export default DeleteProduct;