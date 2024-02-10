import React from "react";
import { Button,Card,Col } from "react-bootstrap";
import { useState } from "react";

function OffersCards({image,id,title,text}) {
    const [qty, setQty] = useState(0)
    const bascket=()=>{
        setQty(qty+1)
    }
  return (
    <div>
      <Col>
        <Card
          style={{ height: "400px" }}
          id={id}
          >
          <Card.Img variant="top" src={image} className="h-50" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <div>
              <Button variant="primary" onClick={bascket} >
                Add To Cart
              </Button>
              <span className="qty">{qty}</span>
            </div>
            
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
}

export default OffersCards;
