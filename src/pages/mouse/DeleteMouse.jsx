import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MouseService from "../../services/MouseService";
import swal from "sweetalert";
import Mouse from "./Mouse";

const DeleteMouse = () => {
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
          MouseService.deleteProduct(id)
            .then((res) => {
              swal("The product has been deleted!", {
                icon: "success",
              });
              navigate("/mouse");
            })
            .catch((e) => {
              console.log(e);
              swal("Delete failed!", {
                icon: "error",
              });
              navigate("/mouse");
            });
        } else {
          swal("The product is safe!", {
            icon: "success",
          });
          navigate("/mouse");
        }
      })
      .catch((e) => {
        console.log(e);
        swal("Cancel failed!", {
          icon: "error",
        });
        navigate("/mouse");
      });
  };

  useEffect(() => {
    deleteProduct();
  }, []);

  return <Mouse />;
};

export default DeleteMouse;
