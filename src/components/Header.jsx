import 'bootstrap/dist/js/bootstrap.min';
import React, { Component } from "react";
import AboutUs from './AboutUs';
import Gallery from './Gallery';

class Header extends Component {
   state = {
        linkHome: "Home",
        linkAbout: "AboutUs",
        linkFAQ: "FAQ"
    }

    componentDidMount() {
        this.setState({
            linkHome: "Home"
        })
    }

    Click = (e, page) => {
        e.preventDefault();
        this.setState({ currentPage: page });
      };

  render() {
    return (
     <div>   
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home" onClick={e => this.Click(e,"home")}>Offcanvas dark navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home"onClick={e => this.Click(e, "home")}>
                {this.state.linkHome}
              </a>
              </li>
                <li className="nav-item">
                  <a className="nav-link" href="AboutUs" onClick={e => this.Click(e, "AboutUs")}>{this.state.linkAbout}</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">How I can join?</a></li>
                    <li><a className="dropdown-item" href="#FAQ" onClick={e => this.Click(e, "FAQ")}>{this.state.linkFAQ}</a></li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      {this.state.currentPage === "AboutUs" && <AboutUs />}
      {this.state.currentPage === "Home" ? <Gallery /> : null}
    </div>
    );
  }
}

export default Header;
