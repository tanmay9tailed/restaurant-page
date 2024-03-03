import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Modal from "../../Modal";
import Cart from "../cart";
import logo from "../../../public/logo.png";
import "./nav.css";
import { useCart } from "../contextReducer";

export default function Nav() {
  const [cartView, setCartView] = useState(false);
  const data = useCart();

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const openCartView = () => {
    setCartView(true);
  };

  const closeCartView = () => {
    setCartView(false);
  };

  return (
    <nav>
      <div className="nav-l">
        <NavHashLink to="/">
          <img src={logo} alt="" height={60} />
        </NavHashLink>
      </div>
      <div className="nav-r">
        <ul>
          {localStorage.getItem("authToken") ? (
            <>
              {location.pathname === "/myorder" ? (
                <li>
                  <NavHashLink to="/">
                    <span className="underline">Home</span>
                  </NavHashLink>
                </li>
              ) : (
                <li>
                  <NavHashLink to="/myorder">
                    <span className="underline">My Orders</span>
                  </NavHashLink>
                </li>
              )}
              {location.pathname === "/Menu" ? (
                <li>
                  <NavHashLink to="/">
                    <span className="underline">Home</span>
                  </NavHashLink>
                </li>
              ) : (
                <li>
                  <NavHashLink to="/Menu">
                    <span className="underline">Menu</span>
                  </NavHashLink>
                </li>
              )}
              <li>
                <NavHashLink to={location.pathname}>
                  <span className="underline" onClick={openCartView}>
                    My Cart{" "}
                    {data.length === 0 ? (
                      ""
                    ) : (
                      <span id="badge">{data.length}</span>
                    )}
                  </span>
                </NavHashLink>
              </li>
              {cartView && (
                <Modal key="cartModal" onClose={closeCartView}>
                  <Cart />
                </Modal>
              )}
              <li>
                <NavHashLink to="/login">
                  <span className="nav-btn" onClick={handleLogout}>
                    Log Out
                  </span>
                </NavHashLink>
              </li>
            </>
          ) : (
            <>
              {location.pathname === "/login" ? (
                <NavHashLink to="/signup">
                  <span className="nav-btn">Sign Up</span>
                </NavHashLink>
              ) : (
                <NavHashLink to="/login">
                  <span className="nav-btn">Login</span>
                </NavHashLink>
              )}
              {/* {location.pathname === "/" ? (
                <>
                <NavHashLink to="/login">
                  <span className="nav-btn">Login</span>
                </NavHashLink>
                <NavHashLink to="/signup">
                <span className="nav-btn">Sign Up</span>
              </NavHashLink></>
              ) : (
                ""
              )} */}
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
