import React from "react";
import Navbar from "../components/Navbar";
import Waves from "../components/Waves";

const Blog = () => {
  return (
    <div>
      <section id="hero">
        <Navbar />

        <div className="inner-header flex">
          <h1>Bienvenue sur la page blog</h1>
        </div>
        <Waves />
      </section>

      <section id="content" className="flex">
        <p>Nicolas</p>
      </section>
    </div>
  );
};

export default Blog;
