import React, { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

function ProductCard({ id, title, price, image, manageTotalQty }) {
  // let qty=0;
  const [qty, setQty] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const productsCardList = JSON.parse(localStorage.getItem("cart"));
      productsCardList.map((item) => {
        if (item.id == id) {
          setQty(item.qty);
        }
      });
    }
  }, []);

  const addToCart = () => {
    // qty++  ---> qty= qty+1
    setQty(qty + 1);
    manageTotalQty();
    let productsCartList = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    productsCartList = productsCartList.map((item) => {
      if (item.id == id) {
        item.qty++;
      }
      return item;
    });

    const product = productsCartList.find((item) => item.id == id);
    if (!product) {
      productsCartList.push({
        id,
        title,
        price,
        image,
        qty: qty + 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(productsCartList));
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
            <span className="qty">{qty}</span>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
}

export default ProductCard;
