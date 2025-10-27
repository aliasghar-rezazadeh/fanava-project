import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" style={{ padding: "50px", background: "#fff" }}>
      <h2 style={{ textAlign: "center" }}>خدمات ما</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "30px" }}>
        <div style={{ width: "200px", padding: "20px", border: "1px solid #ddd" }}>خدمات ۱</div>
        <div style={{ width: "200px", padding: "20px", border: "1px solid #ddd" }}>خدمات ۲</div>
        <div style={{ width: "200px", padding: "20px", border: "1px solid #ddd" }}>خدمات ۳</div>
      </div>
    </section>
  );
}

export default Services;
