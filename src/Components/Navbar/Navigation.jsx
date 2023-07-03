import React, { useState } from "react";
import "./Navigation.css"
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
  Form,
  Button,
} from "react-bootstrap";
import StorageIcon from "@mui/icons-material/Storage";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import SvgIcon from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";


const Navigation = ({ ...props }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  <SvgIcon>
    <path />
  </SvgIcon>;

  return (
    <>
    <Navbar expand="lg" style={{ height: "80px", backgroundColor: "GrayText" }}>
      <Box>
        <StorageIcon onClick={handleShow} />
      </Box>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header
          closeButton
          style={{ backgroundColor: "GrayText", height: "80px" }}>
          <Offcanvas.Title>
            <b>List Of Products</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
          <a href="">Hot Deals</a>
          <a href="">Mobiles</a>
          <a href="">Shoes</a>
          <a href="">Watches</a>
          <a href="">Men's pants</a>
          <a href="">Men's Shirts</a>
          <a href="">Ladies Jpants</a>
          <a href="">Cars</a>
          <a href="">Bikes</a>
          <a href="">Washing Machine</a>
          <a href="">Fridge</a>
          <a href="">Soaps</a>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
      <Container>
        <Navbar.Brand href="#home">
          <b>
            <i>Exaltech Software</i>
          </b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ margin: "120px" }}>
            <Nav.Link href="#home">
              <b>Home</b>
            </Nav.Link>
            <Nav.Link href="#home">
              <b>Products</b>
            </Nav.Link>
            <Nav.Link href="#home">
              <b>Services</b>
            </Nav.Link>
            <Nav.Link href="#home">
              <b>Contact</b>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>

           <ul>
            <li> <FacebookIcon /></li>
            <li> <InstagramIcon /></li>
            <li> <TwitterIcon /></li>
            <li> <WhatsAppIcon /></li>
           </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div></div>
    </>
  );
};

export default Navigation;
