import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" style={{ padding: "50px", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>درباره ما</h2>
      <p style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6", textAlign: "center" }}>
        فن‌آوا یک شرکت پیشرو در زمینه ارائه خدمات فناوری اطلاعات و آموزش‌های آنلاین است. 
        هدف ما ارتقاء دانش و مهارت کاربران و ارائه بهترین راهکارهای دیجیتال است.
      </p>
    </section>
  );
}

export default About;
