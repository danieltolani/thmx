import React from "react";
import ProductsDisplay from "./productsDisplay";

import "../styles/products.css";

const Products = () => {
  return (
    <section className="products-wrapper">
      <h1> Where Social Meets Crypto and Gaming </h1>

      <div className="products-data-container">
        <ProductsDisplay
          source="https://i.imgur.com/cVAGhtp.png"
          alt="Susan-1"
          productHeading="Crypto Section Copy"
          productParagraph="Paragraph talking about the hero section sdvjndsf efhb ejn er ouwnfer."
          btnCopy="Learn more"
        />
        <ProductsDisplay
          source="https://i.imgur.com/cVAGhtp.png"
          alt="Susan-1"
          productHeading="Crypto Section Copy"
          productParagraph="Paragraph talking about the hero section sdvjndsf efhb ejn er ouwnfer."
          btnCopy="Learn more"
        />
        <ProductsDisplay
          source="https://i.imgur.com/cVAGhtp.png"
          alt="Susan-1"
          productHeading="Crypto Section Copy"
          productParagraph="Paragraph talking about the hero section sdvjndsf efhb ejn er ouwnfer."
          btnCopy="Learn more"
        />
{/* 
        <ProductsDisplay
          source="https://i.imgur.com/tVw2ui2.png"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
        />
        <ProductsDisplay
          source="https://i.imgur.com/tVw2ui2.png"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
        /> */}
      </div>
    </section>
  );
};

export default Products;