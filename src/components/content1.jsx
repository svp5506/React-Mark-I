import React, { Component } from "react";
import { Col, Row, Media } from "react-bootstrap";
import "./content1.css";
export default class content1 extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src="https://img.icons8.com/color/48/000000/light.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Solar without Panels</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus. Cras sit amet nibh libero, in gravida
                nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec sed odio dui.
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </Media.Body>
          </Media>
        </Col>

        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="align-self-start mr-3"
              src="https://img.icons8.com/color/48/000000/solar-panel.png"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>Benefits of Solar</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                scelerisque ante sollicitudin commodo. Cras purus odio,
                vestibulum in vulputate at, tempus viverra turpis. Fusce
                condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                congue felis in faucibus. Cras sit amet nibh libero, in gravida
                nulla. Nulla vel metus scelerisque ante sollicitudin commodo.
                Cras purus odio, vestibulum in vulputate at, tempus viverra
                turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                Donec lacinia congue felis in faucibus.
              </p>

              <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare
                vel eu leo. Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Donec sed odio dui.
                Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus.
              </p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    );
  }
}
