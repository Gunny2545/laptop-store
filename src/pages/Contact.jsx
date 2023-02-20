import React, { useState } from "react";
import "./pagecss/contact.css";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ContactService from "../services/ContactService";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";

const Contact = () => {
  const navigate = useNavigate();
  let [contact, setContact] = useState({});
  const [message, setMessage] = useState("");

  const saveContact = (e) => {
    e.preventDefault();
    ContactService.create(contact)
      .then((res) => {
        const successMessage = "Message sent successfully.";
        swal({
          icon: "success",
          text: successMessage,
          title: "Result",
        });
        // Clear the form
        setContact({});
        setMessage(successMessage);
        navigate("/contact");
      })
      .catch((e) => {
        const errorMessage = "Message sending failed, Please try again.";
        swal({
          icon: "error",
          text: errorMessage,
          title: "Result",
        });
        setMessage(errorMessage);
        console.log(e);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  // Reset the message state after 7 seconds
  setTimeout(() => {
    setMessage("");
  }, 7000);

  return (
    <MainLayout>
      <h2 className="mt-3">𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗨𝘀</h2>
      <hr />
      <div className="container-contact">
        <div className="contact-box">
          <div className="left-contact" />
          <div className="right-contact">
            <form onSubmit={saveContact}>
              <h3>📨 ติดต่อเรา</h3>
              <input
                type="text"
                className="form-control"
                name="cname"
                id="cname"
                placeholder="name"
                value={contact.cname || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control"
                name="cemail"
                id="cemail"
                placeholder="email"
                value={contact.cemail || ""}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control"
                name="cphone_number"
                id="cphone_number"
                placeholder="phone number"
                value={contact.cphone_number || ""}
                onChange={handleInputChange}
              />
              <textarea
                className="form-control"
                name="cmessage"
                id="cmessage"
                placeholder="Message"
                value={contact.cmessage || ""}
                onChange={handleInputChange}
                style={{ minHeight: "150px" }}
              />
              <button className="btn-contact">Send</button>
              {message && (
                <div className="mt-3">
                  <p>{message}</p>
                </div>
              )}
              <div className="mt-3">
                <NavLink to={"/showcontact/"} className="btn btn-light">
                  See message
                </NavLink>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
