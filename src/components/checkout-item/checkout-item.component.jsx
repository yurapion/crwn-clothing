import React from "react";
import "./checkout-item.styles.scss";

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

const CheckOutItem = ({ cartItem: {name, quantity, price, imageUrl} }) => (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );

export default CheckOutItem;
