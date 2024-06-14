import React from "react";
import '../../App.css';
import './style.css'
import logoimage from "../../Assets/img/rocket.png";

class Navbar extends React.Component {
    render() {
        return(
            <header>
            <nav id="navbar">
              <div className="nav-brand">
                  <img src={logoimage} alt="logo tipo da pagina foguete" />
                  <h1>Space Flight News</h1>
              </div>
              <ul className="nav-list">
                <li><a href="/">Home</a></li>
                <li><a href="/">Trending</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">About us</a></li>
              </ul>
            </nav>
    
          </header>
        );
    }
}

export default Navbar;