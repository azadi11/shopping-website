import React from "react";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
function NewProduct({ title, text, image, button }) {
  const [qty, setQty] = useState(0);
  const AddToMyCard = () => {setQty(qty + 1);}
  return (
    <Card style={{ width: "35rem", margin: 50 }}>
      <Card.Body>
        <Card.Img variant="top" src={image} className="h-90" />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" onClick={AddToMyCard}>Shop Now</Button>
        <span>{qty}</span>
      </Card.Body>
    </Card>
  );
}

export default NewProduct;
