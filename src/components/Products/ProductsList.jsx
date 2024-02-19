import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import  image1 from "../../assets/images/pic2.jpg"
import  image2 from "../../assets/images/pic3.jpg"
import  image3 from "../../assets/images/pic4.jpg"
import axios from "axios";

function ProductsList({manageTotalQty}) {
  
  const [productsData, setProductsData] = useState([])
   
  //lifecycle hook (hellper function)
  // useEffect(()=>{
  //   console.log("only mounting");
  // }, [])

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res)=> {
      console.log(res.data)
      setProductsData(res.data)
    })
    .catch((error)=>console.log(error))
  },[])


  return (
    //map
    <Container>
      <Row xs={1} md={3} lg={4} className="g-4">
        {productsData.map((item) => (
          <ProductCard manageTotalQty={manageTotalQty} id={item.id} title={item.title} price={item.price} image={item.image} />
        ))}
      </Row>
    </Container>
  );
}

export default ProductsList;

// function sum(x,y) {
//   return x+y;
// }

// sum(20, 30)
// sum(10, 30)
// sum(20, 300)
