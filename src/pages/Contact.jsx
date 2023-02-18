import React from "react";
import "./pagecss/contact.css";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import swal from "sweetalert";
const Contact = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <h2 className="mt-3">𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗨𝘀</h2>
      <hr />
      <div className="container-contact">
        <div className="contact-box">
          <div className="left-contact" />
          <div className="right-contact">
            <h3>📨 ติดต่อเรา</h3>
            <input
              type="text"
              className="field-contact"
              placeholder="Your Name"
            />
            <input
              type="text"
              className="field-contact"
              placeholder="Your Email"
            />
            <input type="text" className="field-contact" placeholder="Phone number" />
            <textarea
              placeholder="Message"
              className="field-contact"
              defaultValue={""}
            />
            <button
              className="btn-contact"
              onClick={() => {
                swal("Success!", "Message sent successfully.", "success");
                navigate("/contact");
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
