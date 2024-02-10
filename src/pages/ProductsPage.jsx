import "bootstrap/dist/css/bootstrap.min.css";
import ProductsList from "../components/Products/ProductsList";

function ProductsPage({manageTotalQty}) {
  return (
    <div >
      <ProductsList manageTotalQty={manageTotalQty}/>
    </div>
  );
}

export default ProductsPage;
