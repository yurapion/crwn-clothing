import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import "./header.styles.scss";

import {
  HeaderContainer,
  LogoContainerLink,
  OprionLink,
  OptionsContainer,
  OptionDiv
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainerLink to="/">
        <Logo className="logo" />
      </LogoContainerLink>

      <OptionsContainer>
        <OprionLink to="/shop">SHOP</OprionLink>
        <OprionLink to="/shop">CONTACT</OprionLink>
        {currentUser ? (
          <OptionDiv as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionDiv>
        ) : (
          <OprionLink className="option" to="/signin">
            SIGN IN
          </OprionLink>
        )}
        <CartIcon />
      </OptionsContainer>

      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser
// });

//  const mapStateToProps = ({user, cart}) => ({
//    currentUser: user.currentUser,
//    hidden: cart.hidden
//  });

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state)
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
