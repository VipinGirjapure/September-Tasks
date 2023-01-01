import { Component } from "react";
import './Header.css'
class Header extends Component {
  render() {
    return (
      <>
        <div className="navbar">
          <h2>all about flowers</h2>
          <div id="navbar-item">
            <a href="#first-box">Blue Flower</a>
            <a href="#second-box">Blue Rose </a>
            <a href="#footer" >Footer </a>
           
          </div>
        </div>
      </>
    );
  }
}
export default Header;
