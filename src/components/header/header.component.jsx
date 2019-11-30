import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import "./header.styles.scss";

const Header = ({ currentUser, hidden, cartItems }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div
            className="option"
            onClick={() => {
              auth.signOut();
            }}
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon cartItems={cartItems} />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

//  const mapStateToProps = ({user, cart}) => ({
//    currentUser: user.currentUser,
//    hidden: cart.hidden
//  });

const mapStateToProps = ({ user: { currentUser }, cart: { hidden, cartItems  } }) => ({
  currentUser,
  hidden,
  cartItems
});

export default connect(mapStateToProps)(Header);
