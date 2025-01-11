import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Products = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("/menu.json")
      .then((response) => response.json())
      .then((data) => setMenuItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div id="bgc">
      <h1 className="product">PRODUCTS</h1>
      <div className="container pqr">
        <div className="row">
          {menuItems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 mb-4">
              <div className="card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-title">{item.price}</p>

                  <Link to={`/product/${item.id}`} state={item}>
                    <button className="button">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
