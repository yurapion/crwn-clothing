import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

//another way
//const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {/* another way
        <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        GO TO CHECKOUT
      </CustomButton> */}
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton> 
    </div>
  );
};

// const mapStateToProps = state => ( {
//     cartItems: state.cart.cartItems
//   })

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems
// });

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

//another way
// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden())
// });

// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
// );
//

export default withRouter(
  connect(mapStateToProps)(CartDropdown)
);
