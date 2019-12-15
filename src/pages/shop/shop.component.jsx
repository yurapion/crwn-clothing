// import { updateCollections } from "../../redux/shop/shop.actions";

// import WithSpinner from "../../components/with-spinner/with-spinner.component";

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
// import CollectionPage from "../collection/collection.component";
// import {
//   firestore,
//   convertCollectionsSnaphotToMap
// } from "../../firebase/firebase.utils";

// import { createStructuredSelector } from "reselect";
// import {
//   selectIsCollectionFetching,
//   selectIsCollectionsLoaded
// } from "../../redux/shop/shop.selectors";

import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import { connect } from "react-redux";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);

//const { updateCollections } = this.props;
//  const collectionRef = firestore.collection("collections");
//fetching data
// fetch('https://forestore/...').then(response => response.json()).then(collections = > console.log(collections));
//Promises
// collectionRef.get().then(snapshot => {
//   const collectionsMap = convertCollectionsSnaphotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });
//Observable pattern
// this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
//   const collectionsMap = convertCollectionsSnaphotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });

// return (
//   <div className="shop-page">
//     <Route
//       exact
//       path={`${match.path}`}
//       render={props => (
//         <CollectionsOverviewWithSpinner
//           isLoading={isCollectionFetching}
//           {...props}
//         />
//       )}
//     />
//     <Route
//       path={`${match.path}/:collectionId`}
//       render={props => (
//         <CollectionPageWithSpinner
//           isLoading={!isCollectionsIsLoaded}
//           {...props}
//         />
//       )}
//     />
//   </div>
// );

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsIsLoaded: selectIsCollectionsLoaded
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);

//class ShopPage extends React.Component {
// state = {
//   loading: true
// };
// constructor(props) {
//   super(props);
//   this.state = {
//     loading: true
//   }
// }

// unsubscribeFromSnapShot = null;

// componentDidMount() {
//const { updateCollections } = this.props;
//  const collectionRef = firestore.collection("collections");
//fetching data
// fetch('https://forestore/...').then(response => response.json()).then(collections = > console.log(collections));
//Promises
// collectionRef.get().then(snapshot => {
//   const collectionsMap = convertCollectionsSnaphotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });
//Observable pattern
// this.unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {
//   const collectionsMap = convertCollectionsSnaphotToMap(snapshot);
//   updateCollections(collectionsMap);
//   this.setState({ loading: false });
// });
//}
// render() {
//   const { match } = this.props;
//   const { loading } = this.state;
//   return (
//     <div className="shop-page">
//       <Route
//         exact
//         path={`${match.path}`}
//         render={props => (
//           <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
//         )}
//       />
//       <Route
//         path={`${match.path}/:collectionId`}
//         render={props => (
//           <CollectionPageWithSpinner isLoading={loading} {...props} />
//         )}
//       />
//     </div>
//   );
// }
// render() {
//   const { match } = this.props;
//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route
//         path={`${match.path}/:collectionId`}
//         component={CollectionPage}
//       />
//     </div>
//   );
// }
//}

// const mapDispatchToProps = dispatch => ({
//   updateCollections: collectionsMap =>
//     dispatch(updateCollections(collectionsMap))
// });

// const ShopPage = ({ match }) => {
//   return (
//     <div className="shop-page">
//       <Route exact path={`${match.path}`} component={CollectionsOverview}/>
//       <Route  path={`${match.path}/:collectionId`} component = {CollectionPage}/>
//     </div>
//   );
// };

// export default ShopPage;

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
