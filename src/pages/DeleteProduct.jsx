import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductService from '../services/ProductService'
import swal from 'sweetalert'
import Product from './Product'

const DeleteProduct = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const deleteProduct = () => {
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
            navigate('/product');
          })
          .catch((e) => {
            console.log(e);
            swal("Delete failed!", {
              icon: "error",
            });
            navigate('/product');
          });
      } else {
        swal("The product is safe!", {
          icon: "success",
        });
        navigate('/product');
      }
    })
    .catch((e) => {
      console.log(e);
      swal("Cancel failed!", {
        icon: "error",
      });
      navigate('/product');
    });
  };

  useEffect(() => {
    deleteProduct();
  }, []);

  return (
    <Product/>
  );
};

export default DeleteProduct;
