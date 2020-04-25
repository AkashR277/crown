import React from "react";
import { render } from "react-dom";
import "./home.style.scss";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory></Directory>
  </div>
);

export default HomePage;
