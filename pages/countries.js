/**
 * Ali_Mongi-L3T11-NextJS
 * @countries.js -- presents list of countires on a specific continent
 */

import Layout from "../components/Layout.js";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

// generates country links stored in an array
const CountryLinks = (props) => {
  const { data } = props;
  var listOfCountries = [];

  for (var i = 0; i < data.length; i++) {
    listOfCountries.push(
      <li>
        <Link as={`/country/${i}`} href={`/country?name=${data[i].name}`}>
          <a>{data[i].name}</a>
        </Link>
        <style jsx>
          {`
            a {
              color: #38acec;
              font-size: 30px;
            }
          `}
        </style>
      </li>
    );
  }
  return listOfCountries;
};

// listing for the available countries on chosen region
const Countries = ({ data }) => {
  return (
    <Layout>
      <ul>
        <CountryLinks data={data} />
      </ul>
    </Layout>
  );
};

/**
 * fetch API to get countries
 * "https://restcountries.eu/rest/v2/regionalbloc/eu"
 * https://restcountries.eu/rest/v2/region/africa
 * */
Countries.getInitialProps = async (ctx) => {
  const region = ctx.query.name;
  const res = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
  const json = await res.json();

  return { data: json };
};

export default Countries;
