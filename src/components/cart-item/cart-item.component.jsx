import React from "react";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import "./cart-item.styles.scss";

const CartItem = ({ item, dispatch }) => {
  const { imageUrl, price, name, quantity } = item
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {" "}
          {quantity} x ${price}
        </span>
        <div
          className="remove-button"
          onClick={() => dispatch(clearItemFromCart(item))}
        >
          &#10005;
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem))
// });

export default connect()(CartItem);
