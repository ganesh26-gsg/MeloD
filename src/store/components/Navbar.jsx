import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { allProducts } from "../data/product";

const Navbar = () => {
  const { cartItems } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);

    if (query.trim() !== "") {
      const filtered = allProducts.filter((product) =>
        product.product.toLowerCase().includes(query)
      );
      setFilteredResults(filtered);
    } else {
      setFilteredResults([]);
    }
  };

  return (
   <>
   
   
   <div className="navbar-section">
      <div className="navSection">
        <Link to="/" className="custom-link">
          <div className="title">
            <h2>MeloD</h2>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
          />
          {/* Display search results */}
          {searchTerm && (
            <div className="search-results">
              {filteredResults.length > 0 ? (
                filteredResults.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="custom-link"
                  >
                    <div className="search-item">{product.product}</div>
                  </Link>
                ))
              ) : (
                <div className="search-item">No products found</div>
              )}
            </div>
          )}
        </div>

        <div className="user">
          <Link to="/login">
          <div style={{textDecoration:'none'}} className="user-detail">LogIN/Register</div>
       </Link>
        </div>


        <Link to="/cart">
          <div className="cart">
            Cart <span>{cartItems.length}</span>
          </div>
        </Link>

        </div>
<div className="subMenu">
  <ul>
  <Link to='/men'>
    <li>Men</li>
    </Link>
    
   <Link to='/women'>
   <li>Woman</li>
   </Link>

    <Link to='/beauty'>
    <li>Beauty</li>
    </Link>

    <Link to='/computer'>
    <li>Computer</li>
    </Link>

    <Link to='/mobile'> 
    <li >Mobiles</li >
    </Link>

    <Link to='/ac'>
    <li>Ac</li>

    </Link>
    <Link to='/tv'>
    <li>Tv's</li>

    </Link>
    <Link to='/fridge'>
    <li>Fridges</li>
    </Link>
    
    <li>Footwear</li>
    <li>Furniture</li>
    <li>Kitchen</li>
    <li>Books</li>
    <li>Speakers</li>
     <li>Battery</li>
     <li>Bags</li>
    
  </ul>
</div>




      </div>
    
   
   
   
   
   
   
   
   </>
  );
};

export default Navbar;
