import React from "react";
import '../styles/products.css'
import { useState } from "react";

const ProductsDisplay = (props) => {

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
        <section className="products-section">
      <div className="products">
      <div className="card-details">
        <div className="card-lhs">
          <div className="product-copies">
              <h1>{props.productHeading}</h1>
              <p>{props.productParagraph}</p>
            </div>
            <button
            className="button"
            style={{
              "--x": x,
              "--y": y,
            }}
            onMouseMove={handleMouseMove}
          >
            {props.btnCopy}
          </button>
        </div>

        <img className="img" alt={props.alt} src={props.source} />
    
        </div>
      </div>
    </section>
    )
}


export default ProductsDisplay;