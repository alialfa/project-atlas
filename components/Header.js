/**
 * Ali_Mongi-L3T11-NextJS
 * @Header.js -- used within the main layout file, contains a navigation bar
 */

import Link from "next/link";

const linkStyle = {
  marginRight: 15,
};

const Header = () => (
  <div className="menubar">
    <h4>PROJECT ATLAS</h4>
    <Link href="/">
      <a style={linkStyle}>REGION SELECT</a>
    </Link>
    <br></br>
    <hr></hr>
    <style jsx>
      {`
        .menubar {
          margin-bottom: 60px;
        }
        .menubar h4 {
          float: left;
          font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
          font-size: 30px;
          font-weight: bold;
        }
        .menubar h4 .name1 {
          color: rgb(39, 20, 4);
        }
        .menubar h4 .name2 {
          color: yellowgreen;
        }
        .menubar h6 {
          text-align: center;
          font-size: 14px;
          color: grey;
        }
        .menubar a {
          text-align: center;
          float: right;
          color: grey;
          font-size: 20px;
        }
        .menubar a:hover {
          color: yellowgreen;
        }
        hr {
          height: 50px;
          border-radius: 70px;
          background-color: #b9c795;

          width: 100%;
          border: none;
        }
      `}
    </style>
  </div>
);

export default Header;
