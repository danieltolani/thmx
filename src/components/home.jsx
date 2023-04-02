import React from "react";
import "../styles/home.css";
import { useState } from "react";
import Products from "./products";
import NewEra from "./newEra";
import Partners from "./partners";

const Home = () => {
  const [x, setX] = useState("50%");
  const [y, setY] = useState("50%");

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    setX(`${posX}px`);
    setY(`${posY}px`);
  };

  return (
    <section className="home-section">
      <div className="home">
        <div className="hero-section">
          <h1 className="hero-heading home-center">
            The Next Evolution of Social Media
          </h1>
          <p className="hero-paragraph home-center">
            Discover the latest trends in content creation, gaming, investing,
            and more.
          </p>
          {/* <button className="btn home-center">Join Xviral today</button> */}
          <button
            className="button"
            style={{
              "--x": x,
              "--y": y,
            }}
            onMouseMove={handleMouseMove}
          >
            Join Xviral today
          </button>
        </div>
      </div>
      <Products/>
      <NewEra />
      <Partners/>
    </section>
  );
};

export default Home;
