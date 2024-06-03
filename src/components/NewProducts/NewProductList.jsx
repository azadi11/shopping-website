import React from "react";
import NewProduct from "./NewProduct";
import { Image, Row, Card, Col } from "react-bootstrap";
import image1 from "./MyImages/pic8.jpeg";
import image2 from "./MyImages/pic3.jpg";

function NewProductList() {

  const newProducts = [
    {
      title: "coat",
      text: "Be the first seeing what we got new",
      image: image1,
    },
    {
      title: "jacket",
      text: "Be the first seeing what we got new",
      image: image2,
    },
    {
      title: "blazer",
      text: "Be the first seeing what we got new",
      image: image2,
    },
    {
      title: "shirt",
      text: "Be the first seeing what we got new",
      image: image2,
    },
    {
      title: "suit",
      text: "Be the first seeing what we got new",
      image: image2,
    },
    {
      title: "puffers",
      text: "Be the first seeing what we got new",
      image: image2,
    },
  ];
  return (
    <div className="container ">
      <h1>NEW PRODUCTS</h1>
      <div className="row row-cols-1 row-cols-md-2 ">
        {newProducts.map((item, index) => (
          <NewProduct key={index+1} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

export default NewProductList;
