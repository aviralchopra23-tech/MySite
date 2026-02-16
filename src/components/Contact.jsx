import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <h1 className="contact-title">
            Let’s turn ideas into <br />
            scalable solutions.
          </h1>

          <p className="contact-subtitle">Or just say hello.</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          <div className="contact-item">
            <p className="contact-label">Email</p>
            <a className="contact-link" href="mailto:aviralchopra23@email.com">
              aviralchopra23@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <p className="contact-label">LinkedIn</p>
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/aviral99"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/aviral99
            </a>
          </div>

          <div className="contact-item">
            <p className="contact-label">GitHub</p>
            <a
              className="contact-link"
              href="https://github.com/aviralchopra23-tech"
              target="_blank"
              rel="noreferrer"
            >
              github.com/aviralchopra23-tech
            </a>
          </div>

          <div className="contact-item">
            <p className="contact-label">Location</p>
            <p className="contact-location">Toronto, Canada</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;