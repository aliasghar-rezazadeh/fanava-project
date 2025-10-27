import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'; 
import Header from "./components/layout/Header";
import Banner from "./components/Banner";
import Services from "./components/Services";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogDetail from "./components/BlogDetail";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Services />
              <About />
              <Blog />
              <Contact />
            </>
          }
        />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
