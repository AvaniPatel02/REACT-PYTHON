import React ,{useEffect} from 'react';
import { Link, useLocation } from "react-router-dom";
import './Header.css';
import logo from './logo.png'

const Header = () => {

  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-header">
    <div className="container-fluid">
    <img src={logo} className='image' alt="" srcSet="" />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" to="/">Home</Link>
        </li>
          </li>
          <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"? "active": ""}`} to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/products"? "active": ""}`} to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/customers"? "active": ""}`} to="/customers">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname==="/contactus"? "active": ""}`} to="/contactus">Contactus</Link>
          </li>   
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>




  )
}

export default Header

