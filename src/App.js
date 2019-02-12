import React from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import "./style/main.scss";

class App extends React.Component {
  render() {
    return (
      <div className="outer-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
