/**
 * Ali_Mongi-L3T11-NextJS
 * @index.js -- landing page where users are presented with different regional blocks
 */

import Layout from "../components/Layout.js";
import Link from "next/link";
import { Row, Col, Container, Card } from "react-bootstrap";

// generates card links for a continent
const RegionLink = (props) => (
  <Link as={`/region/${props.id}`} href={`/countries?name=${props.name}`}>
    <Col xs={4}>
      <Card
        bg={props.color.toLowerCase()}
        key={props.id}
        style={{ width: "13rem" }}
        className="mb-2"
      >
        <Card.Header>{props.name}</Card.Header>
        <Card.Img
          variant="top"
          src={`/static/images/${props.img}`}
          alt="region"
        />
      </Card>
    </Col>
  </Link>
);

// listing for the available region blocks
const Index = () => {
  return (
    <Layout>
      <div className="regions">
        <Container>
          <div className="region-A">
            <Row>
              <RegionLink id="1" name="AFRICA" color="Success" img="afro.jpg" />
              <RegionLink
                id="2"
                name="AMERICAS"
                color="Secondary"
                img="us.png"
              />
              <RegionLink id="3" name="ASIA" color="Info" img="asia.png" />
            </Row>
          </div>
          <Row>
            <RegionLink id="4" name="OCEANIA" color="Dark" img="oceania.jpg" />
            <Col></Col>
            <RegionLink id="5" name="EUROPE" color="Warning" img="eu.png" />
          </Row>
        </Container>
      </div>
      <style jsx>
        {`
          .regions {
            margin-top: 10%;
            width: 50%;
            margin-left: auto;
            margin-right: auto;
            color: black;
            font-weight: bold;
            cursor: pointer;
          }
          .region-A {
            margin-bottom: 30px;
          }
          #5 {
            float: right;
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
