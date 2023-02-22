import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import ContactService from "../../services/ContactService";

const ContactReply = () => {
  let params = useParams();
  let [contact, setContact] = useState({});

  useEffect(() => {
    fetchContact();
  }, []);

  let id = params.id;
  let [reply, setReply] = useState({});

  const saveReply = (e) => {
    e.preventDefault();
    console.log(reply);
    ContactService.addReply(id, { reply })
      .then((res) => {
        fetchContact();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReply({ ...reply, [name]: value });
  };

  const fetchContact = () => {
    ContactService.get(params.id)
      .then((res) => {
        setContact(res.data.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <MainLayout>
      <h2 className="mt-3">From : {contact.cname}</h2>
      <div className="row mt-3">
        <div className="col-md-8 border p-4">
          <h5>{contact.cname}</h5>
          <p>{contact.cemail}</p>
          <p>{contact.cphone_number}</p>
          <p>
            <hr />
            Message : {contact.cmessage}
          </p>
        </div>
      </div>
      <div className="row mt-2">
        <h4>Reply of this message.</h4>
        <hr />
        <div className="col">
          <div className="container">
            <form onSubmit={saveReply}>
              <div className="mb-3 row">
                <label htmlFor="inputName" className="col-2 col-form-label">
                  Add your reply
                </label>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    name="comment"
                    id="comment"
                    placeholder=""
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {contact.reply &&
          contact.reply.map((r) => (
            <div className="alert alert-info">
              <p>{r.comment}</p>
            </div>
          ))}
      </div>
    </MainLayout>
  );
};

export default ContactReply;
