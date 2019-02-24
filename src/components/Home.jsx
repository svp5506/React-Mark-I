import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import "./Home.css";
import ControlledCarousel from "./Carousel";
import Content1 from "./content1";
import ContentBanner from "../assets/ContentBanner1.png";
import Content2 from "./content2";
import ContactForm from "./contactform";

export default class Home extends Component {
  render() {
    return (
      <div>
        <row>
          <ControlledCarousel />
          {/*<Link to="/about">
                    <Button Style="primary">About</Button>
                </Link>*/}
        </row>
        <row>
          <Content1 />
        </row>
        <row>
        <img id="contentbanner" src={ContentBanner} alt="info banner" />
        </row>
        <row>
          <Content2 />
        </row>
        <row>
          <ContactForm />
        </row>
      </div>
    );
  }
}
