/**
 * Ali_Mongi-L3T11-NextJS
 * @MyLayout.js -- main layout file for pages that extend it
 */

import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  margin: 20,
  padding: 20,
};

const Layout = (props) => (
  <div>
    <Head>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossorigin="anonymous"
      />
    </Head>
    <div style={layoutStyle}>
      <Header />
      {props.children}

      <style global jsx>
        {`
          body {
            background-color: black;
            color: #b9c795; //khaki;
            margin-top: 2%;
            font-size: 24px;
            font-family: Cambria, Cochin, Georgia, Times, "Times New Roman",
              serif;
          }
        `}
      </style>
    </div>
  </div>
);

export default Layout;
