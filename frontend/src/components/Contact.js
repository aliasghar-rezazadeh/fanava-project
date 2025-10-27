import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`پیام شما ارسال شد:\nنام: ${formData.name}\nایمیل: ${formData.email}\nپیام: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" style={{ padding: "50px", background: "#fff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>تماس با ما</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          name="message"
          placeholder="پیام شما"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "16px", minHeight: "100px" }}
        />
        <button type="submit" style={{ padding: "10px", fontSize: "16px", background: "#007BFF", color: "#fff", border: "none", cursor: "pointer" }}>
          ارسال پیام
        </button>
      </form>
    </section>
  );
}

export default Contact;
