import React from "react";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import {
  removeItem,
  clearItemFromCart,
  addItem
} from "../../redux/cart/cart.actions";

// const CheckOutItem = ({ cartItem }) => (
//   <div className="checkout-item">
//     <div className="image-container">
//       <img src={cartItem.imageUrl} alt="item" />
//     </div>
//     <span className="name">{cartItem.name}</span>
//     <span className="quantity">{cartItem.quantity}</span>
//     <span className="price">{cartItem.price}</span>
//     <div className="remove-button">&#10005;</div>
//   </div>
// );

//({ cartItem: {name, quantity, price, imageUrl} })

const CheckOutItem = ({ cartItem, clearItemFromCart, removeItem, addItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispathcToProps = dispatch => ({
  clearItemFromCart: cartItem => dispatch(clearItemFromCart(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem))
});

export default connect(null, mapDispathcToProps)(CheckOutItem);
