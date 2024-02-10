import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

function ProductCard({ id, title, price, image , manageTotalQty}) {
  // let qty=0;
  const [qty, setQty] = useState(0);
  const [bg, setBg] = useState(false); // false: white, true:success
  
  const addToCart = () => {
    // qty++  ---> qty= qty+1
    setQty(qty + 1);
    manageTotalQty()
    // console.log(qty);
  };

  const toggleBg = () => {
    setBg(!bg);
  };

  // bg?   bg==true   or   bg=="sss"  or bg== 169
  // !bg?   bg==false   or   bg==""  or bg== 0    or   bg==null

  return (
    <div>
      <Col>
        <Card
          id={id}
          style={{ height: "400px" }}
          className={bg ? "bg-success" : "bg-white"}
        >
          <Card.Img variant="top" src={image} className="h-50" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <Button variant="primary" onClick={addToCart}>
                Add To Cart
              </Button>
              <span className="qty">{qty}</span>
            </div>
            <Button variant="warning" onClick={toggleBg}>
              Change Bg
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
}

export default ProductCard;
