import React from "react";
import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login, logout } from "../../redux/slices/userSlice";

function NavBar({ links, totalQty }) {
  const isLogin = useSelector((state) => state.userReducer.isLogin);
  const ttQty = useSelector((state) => state.cardReducer.totalQty);

  const dispatcher = useDispatch();

  const loginUser = () => {
    dispatcher(login());
  };

  const logoutUser = () => {
    dispatcher(logout());
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Azadi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div>
            {isLogin ? (
              <Button className="btn btn-primary" onClick={logoutUser}>
                Logout
              </Button>
            ) : (
              <Button className="btn btn-primary" onClick={loginUser}>
                Login
              </Button>
            )}
          </div>
          <Link to="/checkout" className="ms-4 position-relative">
            <span className="bi bi-cart2 fs-4"></span>
            <span>{ttQty}</span>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
