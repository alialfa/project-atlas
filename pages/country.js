/**
 * Ali_Mongi-L3T11-NextJS
 * @country.js -- final class when a country is viewed
 */

import Layout from "../components/Layout.js";
//import { withRouter } from "next/router";
import { Image, Row, Col, Container } from "react-bootstrap";

// preps render for country data
const CountryDetails = (props) => {
  const { data } = props;
  return (
    <Container>
      <div id="countryInfo">
        <Row>
          <Col xs={6}>
            <div className="main">
              <Image src={data[0].flag} alt="flag" width="440px" />
              <h1>{data[0].name}</h1>
              <h6>{data[0].subregion}</h6>
            </div>
          </Col>
          <Col xs={6}>
            <span className="label">Capital:</span>
            <br></br>
            <span className="value">{data[0].capital}</span>
            <br></br>
            <hr></hr>
            <span className="label">Population:</span>
            <br></br>
            <span className="value">{data[0].population}</span>
            <br></br> <hr></hr>
            <span className="label">Language:</span>
            <br></br>
            <span className="value">{data[0].languages[0].name}</span>
            <br></br> <hr></hr>
            <span className="label">Currency:</span>
            <br></br>
            <span className="value">{data[0].currencies[0].name}</span>
            <hr></hr>
          </Col>
        </Row>
        <style jsx>{`
          #countryInfo {
            margin-top: 14%;
          }
          .main {
            color: white;
            text-align: center;
            margin-top: 15%;
            margin-right: 100px;
          }
          .main h6 {
          }
          .label {
            font-size: 28px;
            color: yellowgreen;
          }
          .value {
            text-align: center;
            color: white;
            font-size: 34px;
          }
          hr {
            height: 4px;
            background-color: #95b9c7;
            width: 100%;
            border: none;
          }
        `}</style>
      </div>
    </Container>
  );
};

// listing for a country's particulars
const Country = (props) => (
  <Layout>
    <CountryDetails data={props.data} />
  </Layout>
);

/**
 * fetch API to get an individual country
 * `https://restcountries.eu/rest/v2/name/belgium`
 * */
Country.getInitialProps = async (context) => {
  const country = context.query.name;
  const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  const json = await res.json();

  return { data: json };
};

export default Country;
