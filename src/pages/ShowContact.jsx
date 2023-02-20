import React, { useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import ContactService from "../services/ContactService";
import { NavLink } from "react-router-dom";

const ShowContact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    ContactService.getAll()
      .then((res) => {
        setContacts(res.data.data);
        console.log(res.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <MainLayout>
      <h2 className="mt-3">𝗔𝗹𝗹 𝗺𝗲𝘀𝘀𝗮𝗴𝗲</h2>
      <hr />
      <div className="row">
        {/* <div className="d-flex justify-content-end">
          <NavLink to="/contact" className="btn btn-success">
            Contact
          </NavLink>
        </div> */}
      </div>
      <div className="row mt-2 row-cols-lg-1 row-cols-3 g-2">
        {contacts.map((p) => (
          <ContactList key={p._id} contact={p} />
        ))}
      </div>
    </MainLayout>
  );
};

const ContactList = (props) => {
  console.log(props);
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <div className="card-text">
            <h6>Name : {props.contact.cname.replace(/.(?=.{2})/g, "*")}</h6>

            <h6>
              Email :{" "}
              {props.contact.cemail.replace(
                /^(.)(.*)(.@.*)$/,
                (_, a, b, c) => a + b.replace(/./g, "*") + c
              )}
            </h6>

            <hr />
            <h6>Message : {props.contact.cmessage}</h6>
            <div className="d-flex justify-content-end">
              <NavLink
                to={"/contact/delete/" + props.contact._id}
                className="btn btn-danger"
              >
                Delete
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowContact;