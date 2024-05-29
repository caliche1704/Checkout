import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='navbar-logo'>E</h1> 
          <h2 className="navbar-logo2">-Commerce</h2>
        </Link>
        <Link className='seeCarrito' to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
