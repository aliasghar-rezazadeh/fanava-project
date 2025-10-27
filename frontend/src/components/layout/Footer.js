import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer style={{ padding: "20px", background: "#222", color: "#fff", textAlign: "center" }}>
      <p>© 2025 Fanava. تمام حقوق محفوظ است.</p>
      <div>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>اینستاگرام</a>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>تلگرام</a>
        <a href="#" style={{ color: "#fff", margin: "0 10px" }}>لینکدین</a>
      </div>
    </footer>
  );
}

export default Footer;
