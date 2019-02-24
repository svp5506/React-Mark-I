import React, { Component } from "react";
import { Card, CardDeck } from "react-bootstrap";
import "./News.css";

export default class News extends Component {
  render() {
    return (
      <div>
        <row>
          <Card className="bg-dark text-white">
            <Card.Img src="http://www.communitysolaraccess.org/wp-content/uploads/2018/11/New-News-Banner-copy.jpg" alt="News Header" />
            <Card.ImgOverlay id="bannertext">
              <Card.Title><h2>Stay Updated on the Solar Industry</h2></Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          
        </row>
        <row>
          <CardDeck id="newsslots">
            <Card>
              <Card.Img
                variant="top"
                src="https://www.solarcostguide.com/guides/wp-content/uploads/2015/06/Solar-future.jpg"
              />
              <Card.Body>
                <Card.Title>Benefits of Solar</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://www.tesla.com/content/dam/tesla-site/sx-redesign/img/socialcard/MX.jpg"
              />
              <Card.Body>
                <Card.Title>Luxury Electric Vehicles</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img
                variant="top"
                src="https://files.growingproduce.com/growingproduce/wp-content/uploads/2017/12/BabcockRanch_solarfarm.jpg"
              />
              <Card.Body>
                <Card.Title>Community Solar Explained</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
          </CardDeck>
        </row>
      </div>
    );
  }
}
