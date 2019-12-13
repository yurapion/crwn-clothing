import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import CheckOutPage from "./pages/checkout/checkout.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
//import userReducer from "./redux/user/user.reducer";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectCollectionsForPreviewArray } from "./redux/shop/shop.selectors";

class App extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, collectionsArray } = this.props;
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState( {currentUser: user});
      //createUserProfileDocument(userAuth);
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //   userRef.onSnapshot(snapShot => {
        //     this.setState({
        //       currentUser: {
        //         id: snapShot.id,
        //         ...snapShot.data()
        //       }
        //     });
        //   });
        // } else {
        //   this.setState({ currentUser: userAuth });
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
      // addCollectionAndDocuments('collections', collectionsArray.map(obj => (obj.title, obj.items)));
      // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})));
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckOutPage} />
            {/* <Route exact path="/signin" component={SignInAndSignUpPage} /> */}
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// const mapStateToProps = ({ user }) => ({
//   currentUser: user.currentUser
// });

const mapStateToProps = state => ({
  currentUser: selectCurrentUser(state),
  collectionsArray: selectCollectionsForPreviewArray(state)
});

const mapDispathcToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispathcToProps)(App);
