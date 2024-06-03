import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increaseQty } from "../../redux/slices/cardSlice";

function ProductCard({ id, title, price, image }) {
  // let qty=0;
  const [qty, setQty] = useState(0);
  const dispatcher = useDispatch();
  const myCart = useSelector((state)=>state.cardReducer.cart)

  useEffect(() => {
    myCart.map((item) => {
        if (item.id == id) {
          setQty(item.qty);
        }
      });
    }, []);

  const addToCart = () => {
    setQty(qty + 1);
    dispatcher(increaseQty({id, title, price, image, qty}));
  };

  return (
    <div>
      <Col>
        <Card id={id} style={{ height: "400px" }}>
          <Card.Img variant="top" src={image} className="h-50" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <Button variant="primary" onClick={addToCart}>
              Add To Cart
            </Button>
            {qty}
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
}

export default ProductCard;
