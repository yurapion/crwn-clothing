import React from "react";
import "./collection-item.styles.scss";

import CustomButton from "../custom-button/custom-button.component";
//
import { addItem } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

// const CollectionItem = ({ id, name, imageUrl, price }) => (
//   <div className="collection-item">
//     <div
//       className="image"
//       style={{
//         backgroundImage: `url(${imageUrl})`
//       }}
//     />
//     <div className="collection-footer">
//       <span className="name">{name}</span>
//       <span className="name">{price}</span>
//     </div>
//     <CustomButton inverted >Add to cart</CustomButton>
//   </div>
// );

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
