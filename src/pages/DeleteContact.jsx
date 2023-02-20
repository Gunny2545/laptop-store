import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ContactService from '../services/ContactService'
import swal from 'sweetalert'
import ShowContact from './ShowContact'

const DeleteContact = () => {
  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  const deleteContact = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this message!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        ContactService.deleteContact(id)
          .then((res) => {
            swal("The message has been deleted!", {
              icon: "success",
            });
            navigate('/showcontact');
          })
          .catch((e) => {
            console.log(e);
            swal("Delete failed!", {
              icon: "error",
            });
            navigate('/showcontact');
          });
      } else {
        swal("The message is safe!", {
          icon: "success",
        });
        navigate('/showcontact');
      }
    })
    .catch((e) => {
      console.log(e);
      swal("Cancel failed!", {
        icon: "error",
      });
      navigate('/showcontact');
    });
  };

  useEffect(() => {
    deleteContact();
  }, []);

  return (
    <ShowContact/>
  );
};

export default DeleteContact;
