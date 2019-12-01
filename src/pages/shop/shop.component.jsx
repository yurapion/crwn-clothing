import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview}/>
      <Route  path={`${match.path}/:collectionId`} component = {CollectionPage}/>
    </div>
  );
};

export default ShopPage;

//
//
//
//
//
// import React from "react";
// import "./shop.styles.scss";
// //import SHOP_DATA from "./shop.data";
// import PreviewCollection from "../../components/preview-collection/preview-collection.component";
// import { connect } from "react-redux";
// import { selectCollections } from "../../redux/shop/shop.selectors";

// const ShopPage = ({ collections }) => {
//   return (
//     <div className="shop-page">
//       {collections.map(({ id, ...otherCollectionProps }) => (
//         <PreviewCollection key={id} {...otherCollectionProps} />
//       ))}
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   collections: selectCollections(state)
// });

// export default connect(mapStateToProps)(ShopPage);
