import React, { UseState, Component } from "react";
import "./App.scss";
import ContentBg from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallery from "./Gallery";


class App extends Component {
  render() {
    return (
      <div>

        <Header />
        <Gallery />
        <ContentBg />
        <Footer />
        
      </div>
    );
  }
}
export default App;
