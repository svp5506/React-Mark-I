import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavItem
} from "react-bootstrap";
import "./CustomNavbar.css";
import AqLogo from "../assets/AqLogo.png";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={AqLogo}

            alt="Aquantum Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/">Home</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="About">About</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="News">News</Nav.Link>
            </NavItem>
          </Nav>

          {/*
                    <Nav> 
                        <NavItem>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Go</Button>
                            </Form>
                        </NavItem> 
                    </Nav>
                    */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
