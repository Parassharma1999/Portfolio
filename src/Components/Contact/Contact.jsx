import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
  const form = useRef();
  const [inputValue, setInputValue] = useState({
    FullName: "",
    Subject: "",
    Email: "",
    Message: "",
  });

  const MessageNotify = () => {
    toast.success(
      "Message Sent Successfully, Paras will response you soon !",
      {
        theme: "dark",
        autoClose: 2500,
        hideProgressBar: true,
        position: "top-center",
      }
    );
  };



  const errorNotify = () => {
    toast.error("Failed to send the message, please try again", {
      theme: "dark",
      autoClose: 2500,
      hideProgressBar: true,
      position: "top-center",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
       
      )
      .then((res) => {
        MessageNotify();
      })
      .catch((error) => {
        errorNotify();
      });
    setInputValue({
      FullName: "",
      Subject: "",
      Email: "",
      Message: "",
    });
  };

  return (
    <>
      <ToastContainer />
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>sparas1999@gmail.com</h5>
            <a href="mailto:sparas1999@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <FiLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Paras Kumar sharma</h5>
            <a href="https://www.linkedin.com/in/paras-kumar-sharma-865106233/">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FiTwitter className="contact__option-icon" />
            <h4>Twitter</h4>
            <h5>Paras Kumar Sharma</h5>
            <a href="https://twitter.com/ParasKu27161805">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="Name"
            placeholder="Your Full Name"
            value={inputValue.FullName}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                FullName: e.target.value,
              });
            }}
            required
          />
          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            value={inputValue.Email}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                Email: e.target.value,
              });
            }}
            required
          />
          <input
            type="text"
            name="Subject"
            placeholder="Your Subject"
            value={inputValue.Subject}
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                Subject: e.target.value,
              });
            }}
            required
          />
          <textarea
            name="Message"
            rows="10"
            placeholder="Your Message"
            onChange={(e) => {
              setInputValue({
                ...inputValue,
                Message: e.target.value,
              });
            }}
            value={inputValue.Message}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Contact;
