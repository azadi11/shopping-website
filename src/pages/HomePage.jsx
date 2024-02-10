import { Card, Image, Button } from "react-bootstrap";
import NavBarComponent from "../components/layout/NavBar";
import Cards from "../components/TrustComponent/TrustList";
import ListGroup from "react-bootstrap/ListGroup";
import NewProductList from "../components/NewProducts/NewProductList";
import OffersList from "../components/Offers/OffersList";

function HomePage() {
  return (
    <div>
      <section className="hero d-flex align-items-center justify-content-end">
        <div className="hero-text">
          <h1 className="ShopeNow display-3 fw-bold">Shope Now</h1>
          <Button variant="secondary" className="mt-3">
            Secondary
          </Button>{" "}
        </div>  
      </section>
      <Cards />
      <NewProductList />
      <OffersList/>
    </div>
  );
}

export default HomePage;
