import React from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="header bg-light">
        <nav className="page-container navbar grey navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Pearl Motors
            </Link>
            
            <div style={{display: "flex", justifyContent:"end"}} >
              <ul className="navbar-nav right hide-on-med-and-down ">
                <Link   to="/"><li><i className="fa fa-home fa-2x" aria-hidden="true"></i></li></Link>

                <Link  to="/cart"><li><i className="fa fa-shopping-cart fa-2x" aria-hidden="true"></i></li></Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar